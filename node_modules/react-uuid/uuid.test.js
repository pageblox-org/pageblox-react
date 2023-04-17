const uuid = require("./uuid");

const generatedId = uuid();

test("Test if returned uuid is correct length", () => {
	expect(generatedId).toHaveLength(36);
});

test("Test if returned uuid is formatted correctly", () => {
	expect(generatedId).toMatch(
		/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi
	);
});
