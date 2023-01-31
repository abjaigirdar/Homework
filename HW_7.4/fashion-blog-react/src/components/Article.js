import React from "react";

function Article() {
  return (
    <main>
      <section>
        <article>
          <time datetime="2020-11-12">11/12/20</time>
          <h3>On the Street in Brooklyn</h3>
          <img
            src={process.env.PUBLIC_URL + "/images/blog-image-1.jpg"}
            alt="blog-img1"
          />
          <p class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque non elementum elit. Duis finibus leo id enim vulputate,
            ac viverra libero eleifend. Pellentesque vitae augue odio. Nunc
            rutrum lorem sed venenatis tincidunt. Nunc hendrerit porttitor quam
            et tristique. Curabitur pellentesque risus eget tortor molestie, a
            congue libero cursus. Donec tristique turpis felis, vitae mattis mi
            condimentum ac. Mauris lectus eros, vulputate porttitor suscipit et,
            vestibulum vel ex. Sed sed cursus leo. Fusce vulputate massa ex, ut
            volutpat mauris tempus sed. Phasellus justo massa, maximus vitae
            odio eget, rutrum pharetra est. Vestibulum rhoncus massa eu aliquam
            interdum. Curabitur porta aliquam dictum. Fusce vehicula tincidunt
            dui, fringilla condimentum nibh faucibus vel.
          </p>
          <p class="text-right">
            <a href="/#">Continues ...</a>
          </p>
        </article>
      </section>
      <section>
        <article>
          <time datetime="2020-11-11">11/11/20</time>
          <h3>On the Street in Brooklyn</h3>
          <img
            src={process.env.PUBLIC_URL + "/images/blog-image-2.jpg"}
            alt="blog-img2"
          />
          <p class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque non elementum elit. Duis finibus leo id enim vulputate,
            ac viverra libero eleifend. Pellentesque vitae augue odio. Nunc
            rutrum lorem sed venenatis tincidunt. Nunc hendrerit porttitor quam
            et tristique. Curabitur pellentesque risus eget tortor molestie, a
            congue libero cursus. Donec tristique turpis felis, vitae mattis mi
            condimentum ac. Mauris lectus eros, vulputate porttitor suscipit et,
            vestibulum vel ex. Sed sed cursus leo. Fusce vulputate massa ex, ut
            volutpat mauris tempus sed. Phasellus justo massa, maximus vitae
            odio eget, rutrum pharetra est. Vestibulum rhoncus massa eu aliquam
            interdum. Curabitur porta aliquam dictum. Fusce vehicula tincidunt
            dui, fringilla condimentum nibh faucibus vel.
          </p>
          <p class="text-right">
            <a href="/#">Continues ...</a>
          </p>
        </article>
      </section>
    </main>
  );
}

export default Article;