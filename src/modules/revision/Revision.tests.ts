import * as config from "config";
import { Revision } from "./Revision";


describe("Revision: simple model", () => {

    it('checks config for revision label', () => {
        let revision: string  = String(config.get('revision'));

        expect(revision).toMatch(/v/);
    })

    it('checks GET fn equals config.revision', () => {
        let v: string  = String(config.get('revision'));
        let revision: Revision = new Revision();

        expect(v).toMatch(revision.get());
    })


})