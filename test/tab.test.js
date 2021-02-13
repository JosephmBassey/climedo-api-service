// const { wrongUser, correctUser} = require('../__mocks__/user');

const request = require("./request");

const url = "/api/v1/";

const data = {
    name: "Disease history",
    description: "The chronic of the disease at hand",
    dataPoints: [
        {
            dataType: "selection",
            label: "ECOG_SCORE",
            description: "ECOC score at the start of IO",
            options: ["0", "1", "2", "3", "4", "5", "unknown"],
        },
        {
            dataType: "text",
            label: "ECOG_HB_LEVEL",
            placeholder: "g/dL",
            description: "Hemogolobin level at the start of IO (g/dL)",
        },
    ],
};

describe("Tabs Endpoint", () => {
    it("Should create a new tab", async (done) => {
        const response = await request.post(url+'tabs').send(data);
        expect(response.status).toBe(200);
        expect(response.body.status).toBe("success");
        done();
    });
    it("Should fetch all  tabs", async (done) => {
        const response = await request.get(url+'tabs');
        expect(response.status).toBe(200);
        expect(response.body.status).toBe("success");
        done();
    });
});
