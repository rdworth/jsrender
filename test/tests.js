
test("Property Access, If, Each", function() {

	equal($.render(
		" ${foo}${bar}"
		+ "{{if baz}}baz {{/if}}"
		+ "{{if qux}}qux {{/if}}"
		+ "{{each list}}${$value} {{/each}}",
		{
			foo: "foo",
			baz: true,
			list: [ "a", "b" ]
		}),
		"foobaz a b "
	);

});
