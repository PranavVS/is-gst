"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isGST = void 0;
function isGST(gst) {
    return /\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}/.test(gst);
}
exports.isGST = isGST;
//# sourceMappingURL=index.js.map