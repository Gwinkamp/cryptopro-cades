import { Buffer } from 'buffer';
import { Certificate as x509Certificate } from 'pkijs';
import { fromBER } from 'asn1js';
import { GOST_KEY_ALGORITHM_OIDS, attributeOids, subjectKeyIdExtensionOid, } from '../constants/oids-dictionary';
import { CryptoError } from '../errors';
import { bufferToHex } from './bufferToHex';
/**
 * Получить данные из сертификата.
 * @param target Объект данных (issuer или subject).
 * @param attributeName Наименование извлекаемого атрибута.
 * @throws {CryptoError} в случае ошибки.
 * @returns Извлеченные данные.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parseValue(target, attributeName) {
    var _a, _b, _c, _d;
    if (!target) {
        var errorMessage = "\u041D\u0435 \u0437\u0430\u0434\u0430\u043D \u043E\u0431\u044A\u0435\u043A\u0442 \u0434\u043B\u044F \u0438\u0437\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u044F \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 ".concat(attributeName);
        throw CryptoError.create('CBP-7', errorMessage, null, errorMessage);
    }
    return (_d = (_c = (_b = (_a = target === null || target === void 0 ? void 0 : target.typesAndValues) === null || _a === void 0 ? void 0 : _a.find(function (_a) {
        var type = _a.type;
        return type == attributeOids[attributeName];
    })) === null || _b === void 0 ? void 0 : _b.value) === null || _c === void 0 ? void 0 : _c.valueBlock) === null || _d === void 0 ? void 0 : _d.value;
}
/**
 * Нормализовать ИНН.
 * @param inn ИНН.
 * @returns нормализованный ИНН.
 * @example
 * in 004028031214, out 4028031214
 * in 402701356218, out 402701356218
 */
function normalizeInn(inn) {
    return inn && inn.length == 12 && inn.startsWith('00')
        ? inn.substring(2, 12)
        : inn;
}
/**
 * Парсит данные сертификата.
 * @param certificate Сертификат.
 * @throws {CryptoError} в случае ошибки.
 */
export function parseCertificate(certificate) {
    var _a, _b, _c;
    if (!certificate.certificateBase64Data) {
        var errorMessage = 'Не загружена открытая часть сертификата.';
        throw CryptoError.create('CBP-7', errorMessage, null, errorMessage);
    }
    try {
        var asn1 = fromBER(new Uint8Array(Buffer.from(certificate.certificateBase64Data, 'base64'))
            .buffer);
        var parsedCert_1 = new x509Certificate({ schema: asn1.result });
        var publishKeyAlgorithm = parsedCert_1.subjectPublicKeyInfo.algorithm.algorithmId;
        certificate.algorithm = publishKeyAlgorithm;
        certificate.isGost = GOST_KEY_ALGORITHM_OIDS.includes(publishKeyAlgorithm);
        var subjectKeyIdentifierExtension = (_a = parsedCert_1.extensions) === null || _a === void 0 ? void 0 : _a.find(function (_a) {
            var extnID = _a.extnID;
            return extnID === subjectKeyIdExtensionOid;
        });
        certificate.subjectKeyId = bufferToHex((_c = (_b = subjectKeyIdentifierExtension === null || subjectKeyIdentifierExtension === void 0 ? void 0 : subjectKeyIdentifierExtension.parsedValue) === null || _b === void 0 ? void 0 : _b.valueBlock) === null || _c === void 0 ? void 0 : _c.valueHex);
        Object.keys(certificate.issuer).forEach(function (key) {
            certificate.issuer[key] = parseValue(parsedCert_1.issuer, key);
        });
        Object.keys(certificate.subject).forEach(function (key) {
            certificate.subject[key] = parseValue(parsedCert_1.subject, key);
        });
        certificate.issuer.inn = normalizeInn(certificate.issuer.inn);
        certificate.issuer.innLe = normalizeInn(certificate.issuer.innLe);
        certificate.subject.innLe = normalizeInn(certificate.subject.innLe);
        certificate.subject.inn = normalizeInn(certificate.subject.inn);
        // TODO: здесь можно допарсить данные из открытой части сертификата
    }
    catch (error) {
        throw CryptoError.create('CBP-10', 'Не удалось распарсить данные сертификата.', error);
    }
}
