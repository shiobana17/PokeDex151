const inputElement = document.querySelector("#search-input");
const search_icon = document.querySelector("#search-close-icon");
const sort_wrapper = document.querySelector(".sort-wrapper");
const filterWrapper = document.querySelector(".filter-wrapper");

document.addEventListener("click", (event) => {
    const isClickInside = sort_wrapper.contains(event.target);
    if (!isClickInside) {
        filterWrapper.classList.remove("filter-wrapper-open");
        document.body.classList.remove("filter-wrapper-overlay");
    }
});

sort_wrapper.addEventListener("click", () => {
    filterWrapper.classList.toggle("filter-wrapper-open");
    document.body.classList.toggle("filter-wrapper-overlay");
});


inputElement.addEventListener("input", () => {
    handleInputChange(inputElement);
});
search_icon.addEventListener("click", handleSearchCloseOnClick);

function handleInputChange(inputElement) 
{
    const inputValue = inputElement.value;
    if (inputValue !== "") {
        document.querySelector("#search-close-icon").classList.add("search-close-icon-visible");
    } else {
        document.querySelector("#search-close-icon").classList.remove("search-close-icon-visible");
    } 
}

function handleSearchCloseOnClick() 
{
    document.querySelector("#search-input").value = "";
    document.querySelector("#search-close-icon").classList.remove("search-close-icon-visible");
}

function handleSortIconOnClick() 
{
    document.querySelector(".filter-wrapper").classList.toggle("filter-wrapper-open");
    document.querySelector("body").classList.toggle("filter-wrapper-overlay");
}