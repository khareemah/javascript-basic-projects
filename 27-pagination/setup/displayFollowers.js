const container = document.querySelector(".container");
const sectionTitle = document.querySelector(".section-title");
const display = (followers) => {
  const followersList = followers.map((follower) => {
    const { avatar_url, login, html_url } = follower;
    return `
       <article class='card'>
         <img src="${avatar_url}" alt='person' />
           <h4>${login}</h4>
         <a href="${html_url}" class="btn">view profile</a>
       </article>
       `;
  });
  sectionTitle.innerHTML = `<h1>Pagination...</h1>
      <div class="underline"></div>`;
  container.innerHTML = followersList.join("");
};

export default display;
