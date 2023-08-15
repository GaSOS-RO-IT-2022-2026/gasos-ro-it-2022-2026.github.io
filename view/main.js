const loadingStatus = document.getElementById('loading-status')

const animspeed = 300
anime({
    targets: '.loading .loading-bar',
    translateY: [
        { value: -20, duration: animspeed, easing: 'easeOutQuart'},
        { value: 30, duration: animspeed * 2, easing: 'easeInOutQuart'},
        { value: -10, duration: animspeed * 2, easing: 'easeInOutQuart'},
        { value: 0, duration: animspeed, easing: 'easeInCubic' }
    ],
    scaleY: [
        { value: 4, duration: animspeed, easing: 'easeOutQuart'},
        { value: 3, duration: animspeed * 2, easing: 'easeInOutQuart'},
        { value: 2, duration: animspeed * 2, easing: 'easeInOutQuart'},
        { value: 1, duration: animspeed, easing: 'easeInCubic' }
    ],
    loop: true,
    delay: anime.stagger(100) // increase delay by 100ms for each elements.
});




// Skontroluje zda url má ".." (o složku zpět) a zda nezačíná na / (root)
const UrlCheck = (url) => {
    console.log(url);
    const PathCheck = /^(?!\/)(?!.*\.\.)[a-zA-Z0-9\/]+(?:[a-zA-Z0-9\/]+\.md)?$/g
    if(PathCheck.test(url)) {
        console.log("Match");
        return true
    }
    console.log("No match");
    return false
}

// Načte Data z md souboru
const LoadPage = async (url) => {
    loadingStatus.innerHTML = "Fetching Data"
    let rawData = await fetch(`/content/${url}`)
    let text = await rawData.text()
        // Here's where you get access to the blob
        // And you can use it for whatever you want
        // Like calling ref().put(blob)

        // Here, I use it to make an image appear on the page
    loadingStatus.innerHTML = "Formating Markdown"
    var md = window.markdownit({
        html: true
    })
    console.log(text);
    var result = md.render(text);
    
    document.getElementById('MDview').innerHTML = result
    loadingStatus.innerHTML = "Syntax Highlighting"
    hljs.highlightAll();

    loadingStatus.innerHTML = "Loading Fonts"
    let fontsready = await document.fonts.ready
    loadingStatus.innerHTML = "Done!"
    document.getElementById('Loading').classList.add("hide")
}

// Čte jaký soubor se má načíst (?page=<název souboru zde>)
const urlParams = new URLSearchParams(window.location.search);
const page = urlParams.get('page');

if (page && page != "") {
    if (UrlCheck(page)) {
        if (page.substring(page.length - 3) == ".md") {
            LoadPage(page)
        } else {
            LoadPage(page + ".md")
        } 
    } else {
        window.location.search = ""
    }
    
} else {
    LoadPage("index.md")
}