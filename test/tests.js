
test("empty string", function() {

	equal($.render("",
			{}
		),
		""
	);

	equal($.render("",
			{ foo: "bar" }
		),
		""
	);

});

test("string", function() {

	equal($.render("foo",
			{}
		),
		"foo"
	);

	equal($.render("foo",
			{ foo: "bar" }
		),
		"foo"
	);

});

test("single property, string", function() {
	equal($.render("${foo}",
			{ foo: "bar" }
		),
		"bar"
	);
});

test("single property, number", function() {
	equal($.render("${foo}",
			{ foo: 42 }
		),
		"42"
	);
});

test("single property, boolean", function() {

	// true
	equal($.render("${foo}",
			{ foo: true }
		),
		"true"
	);

	// false
	equal($.render("${foo}",
			{ foo: false }
		),
		"false"
	);

});

test("single property, preserve space", function() {

	equal($.render(" ${foo}",
			{ foo: "bar" }
		),
		" bar"
	);

	equal($.render("${foo} ",
			{ foo: "bar" }
		),
		"bar "
	);

	equal($.render("    ${foo}    ",
			{ foo: "bar" }
		),
		"    bar    "
	);

});

test("two properties", function() {
	equal($.render("<li><b>${Name}</b> (${ReleaseYear})</li>",
			{ Name: "UHF", ReleaseYear: 1989 }
		),
		"<li><b>UHF</b> (1989)</li>"
	);
});
