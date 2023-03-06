//Keeping the year to current year in footer
const year =  document.querySelector(".year");
const currentYear =  new Date().getFullYear();
year.textContent = currentYear;


//Making btn navigation work when the icon is clicked.
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener('click', () => {
    headerEl.classList.toggle("nav-open")
    document.getElementsByTagName("html")[0].classList.toggle("overflow")
})

//Making the sticky navigation bar appear only when hero section is crossed 
const obs = new IntersectionObserver(
    function(entries){
        if(!entries[0].isIntersecting){
            document.body.classList.add("sticky");
        }
        if(entries[0].isIntersecting){
            document.body.classList.remove("sticky");
        }
    },{
        root: null,
        threshold: 0,
        rootMargin: "-80px"
    }
)
obs.observe(document.querySelector(".section-hero"))

//enabling smooth scrolling
const buttons = document.querySelectorAll("a:link")
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        console.log(button.classList)
        e.preventDefault();
        const href = button.getAttribute("href");

        if(href === "#"){
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        } 
        if(href.startsWith("#")){
            const selectedEl = document.querySelector(href);
            selectedEl.scrollIntoView({
                behavior: "smooth"
            })
        }

        //closing mobile navigation on selecting an option
        if(button.classList.contains("main-nav-link")){
            headerEl.classList.toggle("nav-open")
            document.getElementsByTagName("html")[0].classList.toggle("overflow")
        }
    })
})

