window.addEventListener("load", function()
{
	shuffleFragments()
});

// toggle mobile navbar

toggle = false

document.getElementById("menu_button").addEventListener("click", function()
{
	if (toggle == false)
	{
		document.getElementById("menu_list").style.display = "block"
		toggle = true
	}
	else if (toggle == true)
	{
		document.getElementById("menu_list").style.display = "none"
		toggle = false
	}
})

// count how many times fragment is shown
function isFragmentShown(array, fragment)
{
    var count = 0
    for (var i = 0; i < array.length; i++)
    {
        if (array[i] === fragment)
        {
            count++
        }
    }
    return count
}

// shuffle and randomly show fragments
function shuffleFragments()
{
	var fragment = document.querySelectorAll("#fragment")

	var usedFragments = []

	for (var i = 0; i < fragment.length; i++)
	{
		while (true)
		{
			var random = Math.floor(Math.random() * 9) + 118524620
			if (isFragmentShown(usedFragments, random) == 0)
			{
				fragment[i].setAttribute("src", "assets/fragments/" + random + ".jpg")
				usedFragments.push(random)
				break
			}
		}
	}

}