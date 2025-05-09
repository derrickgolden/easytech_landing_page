"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const compression_1 = __importDefault(require("compression"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
require('dotenv').config();
const auth_1 = __importDefault(require("./user/routes/auth"));
const shop_1 = __importDefault(require("./user/routes/shop"));
const authenticateToken_1 = require("./user/middlewares/authenticateToken");
const storage = multer_1.default.diskStorage({
    destination: (req, file, callback) => {
        // console.log("destination", file);
        const absolutePath = path_1.default.resolve(__dirname, 'uploads');
        if (!fs_1.default.existsSync(absolutePath)) {
            fs_1.default.mkdirSync(absolutePath, { recursive: true });
        }
        callback(null, absolutePath);
        // callback(null, "uploads");
    },
    filename: (req, file, callback) => {
        // console.log("file", file);
        callback(null, Date.now() + '-' + file.originalname);
    },
});
const upload = (0, multer_1.default)({ storage: storage });
const app = (0, express_1.default)();
// Enable CORS with specific origin
app.use((0, cors_1.default)());
// Handle preflight requests for all routes
app.options('*', (0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use((0, compression_1.default)());
app.use((0, cookie_parser_1.default)());
const port = process.env.SEVERPORT || 8080;
app.use("/js", express_1.default.static(path_1.default.join(__dirname, 'dist', 'assets', 'index-TSNK7VKS.js')));
app.use(express_1.default.static(path_1.default.join(__dirname, 'dist')));
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist', 'index.html'));
// });
app.get("/", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'dist', 'index.html'));
});
app.use("/user", auth_1.default);
app.use("/user", upload.single('logo'), authenticateToken_1.authenticateToken, shop_1.default);
app.use('/uploads', express_1.default.static(path_1.default.join(__dirname, 'uploads')));
const serverInstance = app.listen(port, () => {
    console.log("Listening to port: ", port);
});
const server = () => {
    return serverInstance;
};
exports.server = server;
//# sourceMappingURL=app.js.map