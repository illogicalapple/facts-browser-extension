document.addEventListener("DOMContentLoaded", () => {
	const request = new Request("https://illogicalapple.github.io/completely-true-facts/facts/facts.json");
	var random = 0;
	var fact = "This fact ~should not show up.!";
	var container = document.querySelector(".centered");
	document.addEventListener("click", event => {
		fetch(request).then(response => response.json()).then(data => {
			random = Math.floor(Math.random() * data.facts.length);
			fact = "Fact number *" + String(random + 1) + "!<br>" + data.facts[random];
			container.innerHTML = fact
				.replaceAll("!", "</span>")
				.replaceAll("*", "<span class='big blue'>")
				.replaceAll("~", "<span class='blue'>")
				.replaceAll("`", "<span class='italic blue'>");
		});
	});
});
