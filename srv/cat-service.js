"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cds = require("@sap/cds");
const logger = cds.log("CatService");
module.exports = class CatalogService extends cds.ApplicationService {
    init() {
        this.on("getData", async (req) => await getData(req));
        this.on("postData", async (req) => await postData(req));
        this.on("putData", async (req) => await putData(req));
        return super.init();
        async function getData(req) {
            const data = await cds.run(SELECT.from(cds.entities.Books));
            logger.info("getData");
            logger.info(JSON.stringify(data));
            logger.error("getData - sample error");
            req.reply("getData");
        }
        async function postData(req) {
            try {
                logger.info("postData");
                req.reply("postData");
                const data = await cds.run(SELECT.from(cds.entities.Booksss));
            }
            catch (error) {
                logger.error(error.message);
            }
        }
        async function putData(req) {
            logger.info("putData");
            const data = await cds.run(SELECT.from(cds.entities.Booksss));
        }
    }
};
//# sourceMappingURL=cat-service.js.map