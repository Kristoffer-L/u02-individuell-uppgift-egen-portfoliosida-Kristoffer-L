let index = 0;

async function getInfo() {
  try {
    const response = await fetch("https://api.github.com/users/Kristoffer-L/repos");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    renderHTML(data);
  } catch (error) {
    console.error("Error", error);
  }
}

async function getTechstack(urlName, index) {
  try {
    const response = await fetch("https://api.github.com/repos/Kristoffer-L/" + urlName + "/languages");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data2 = await response.json();
    renderHTML2(data2, index);
  } catch (error) {
    console.error("Error", error);
  }
}

function renderHTML2(data2, index) {
  console.log("data2", Object.keys(data2));
  document.querySelector(".projects-article-info-" + index).innerHTML = "Tech stack: " + Object.keys(data2).join(", ");
}

getInfo();

function renderHTML(data) {
  data.forEach(() => {
    let urlName = data[index].name;
    const articles = document.createElement("articles");
    document.querySelector(".projects-section-container").appendChild(articles);
    articles.classList.add("projects-article-container");
    articles.classList.add("projects-article-container-" + index);
    articles.classList.add("color-red");

    const mainImg = document.createElement("img");
    document.querySelector(".projects-article-container-" + index).appendChild(mainImg);
    mainImg.classList.add("projects-img");
    mainImg.classList.add("projects-img-" + index);
    document.querySelector(".projects-img-" + index).src = "./Img/Projects-img1.png";

    const divs1 = document.createElement("div");
    document.querySelector(".projects-article-container-" + index).appendChild(divs1);
    divs1.classList.add("projects-text-container");
    divs1.classList.add("projects-text-container-" + index);

    const headline = document.createElement("h2");
    document.querySelector(".projects-text-container-" + index).appendChild(headline);
    headline.classList.add("projects-article-headline");
    headline.classList.add("projects-article-headline-" + index);

    const para1 = document.createElement("p");
    document.querySelector(".projects-text-container-" + index).appendChild(para1);
    para1.classList.add("projects-article-paragraph");
    para1.classList.add("projects-article-paragraph-" + index);

    const para2 = document.createElement("p");
    document.querySelector(".projects-text-container-" + index).appendChild(para2);
    para2.classList.add("projects-article-info");
    para2.classList.add("projects-article-info-" + index);

    const divs2 = document.createElement("div");
    document.querySelector(".projects-text-container-" + index).appendChild(divs2);
    divs2.classList.add("projects-link-container");
    divs2.classList.add("projects-link-container-" + index);

    const divs3 = document.createElement("div");
    document.querySelector(".projects-link-container-" + index).appendChild(divs3);
    divs3.classList.add("projects-link-items");
    divs3.classList.add("projects-link-items-" + index);

    const logoLinkImg = document.createElement("img");
    document.querySelector(".projects-link-items-" + index).appendChild(logoLinkImg);
    logoLinkImg.classList.add("project-darkmode-svg");
    logoLinkImg.classList.add("project-darkmode-svg-" + index);
    document.querySelector(".project-darkmode-svg-" + index).src = "./Img/Project-link.svg";

    const livePreview = document.createElement("a");
    document.querySelector(".projects-link-items-" + index).appendChild(livePreview);
    livePreview.innerHTML = "Live Preview";
    livePreview.classList.add("projects-link-text");
    livePreview.classList.add("projects-link-text-" + index);

    const divs4 = document.createElement("div");
    document.querySelector(".projects-link-container-" + index).appendChild(divs4);
    divs4.classList.add("projects-link-items");
    divs4.classList.add("projects-link-items-2-" + index);
    divs4.classList.add("projects-link-items-end");

    const logoGithubImg = document.createElement("img");
    document.querySelector(".projects-link-items-2-" + index).appendChild(logoGithubImg);
    logoGithubImg.classList.add("project-darkmode-svg");
    logoGithubImg.classList.add("project-darkmode-svg-2-" + index);
    document.querySelector(".project-darkmode-svg-2-" + index).src = "./Img/Project-github.svg";

    const viewCode = document.createElement("a");
    document.querySelector(".projects-link-items-2-" + index).appendChild(viewCode);
    viewCode.innerHTML = "View Code";
    viewCode.classList.add("projects-link-text");
    viewCode.classList.add("projects-link-text-2-" + index);

    document.querySelector(".projects-article-paragraph-" + index).innerHTML = data[index].description;
    document.querySelector(".projects-article-headline-" + index).innerHTML = data[index].name;
    document.querySelector(".projects-link-text-" + index).href = data[index].svn_url;
    document.querySelector(".projects-link-text-2-" + index).href = data[index].svn_url;
    getTechstack(urlName, index);
    index++;
  });
}
// look over
// document.querySelector(".project-darkmode-svg-" + index).alt = "Preview link";
// document.querySelector(".project-darkmode-svg-2-" + index).alt = "Code link";