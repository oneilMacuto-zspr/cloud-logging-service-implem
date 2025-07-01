const cds = require("@sap/cds");
const LOG = cds.log("CatService");
import { Request } from "@sap/cds";

module.exports = class CatalogService extends cds.ApplicationService {
    init() {
        this.on("getData", async (req: Request) => await getData(req));
        this.on("postData", async (req: Request) => await postData(req));
        this.on("putData", async (req: Request) => await putData(req));

        return super.init();

        async function getData(req: Request) {
            try {
                const data = await cds.run(SELECT.from(cds.entities.Books))
                LOG.info("log from locally run app")
                LOG.info("getData");
                LOG.info(JSON.stringify(data));
                LOG.error("getData - sample error")
                req.reply("getData");
            } catch (error: any) {
                LOG.error(error.message);
            }
        }

        async function postData(req: Request) {
            try {
                LOG.info("postData")
                req.reply("postData")
                const data = await cds.run(SELECT.from(cds.entities.Booksss));
            } catch (error: any) {
                LOG.error(error.message);
            }

        }

        async function putData(req: Request) {
            LOG.info("putData")
            const data = await cds.run(SELECT.from(cds.entities.Booksss));
        }
    }
}