<template>
  <li
    v-for="project in projects"
    :key="project.title"
    class="thumbnail project-thumbnail"
    :class="[project.class]"
  >
    <div class="card">
      <img v-bind:src="project.cardImage" alt="test" />
      <div class="overlay"></div>
      <div class="button-container">
        <button id="toggle" class="button">View Project</button>
      </div>
    </div>
    <div id="overlay"></div>
    <div id="project" class="project">
      <button class="project-close" id="test">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="times"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 352 512"
          class="svg-inline--fa fa-times fa-w-11"
        >
          <path
            fill="currentColor"
            d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
            class=""
          ></path>
        </svg>
      </button>

      <div class="project-image">
        <img
          v-if="project.detailCardImage"
          :src="project.detailCardImage"
          class="project-detail-image"
        />
        <video
          v-else-if="project.video"
          width="450"
          height="550"
          class="project-detail-image"
          controls
        >
          <source v-bind:src="project.video" type="video/mp4" />
        </video>
      </div>
      <div class="project-description">
        <h3>{{ project.title }}</h3>

        <ul>
          <li class="tag-item" v-for="tag in project.tags" :key="tag.tag">
            {{ tag.tag }}
          </li>
        </ul>

        <h5>About</h5>
        <p>
          {{ project.body }}
        </p>

        <div class="links-container">
          <a
            v-if="project.demoLink"
            class="btn-detail links-container-button demo-button"
            href="https://karelmuns.nl/"
            target="_blank"
            >Demo</a
          >

          <a
            v-if="project.codeLink"
            class="btn-detail links-container-button code-button"
            href="https://karelmuns.nl/"
            target="_blank"
            >Code</a
          >
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      projects: {
        karelmuns: {
          title: "Karel Muns",
          cardImage: "images//karelmunstest2.png",
          detailCardImage: "images//karelmunstest7.png",
          body:
            "My role in this project was to serve as one of three full stack developers.\n\n My primary responsiblities were to customize, manage and setup Voyager to serve as the CMS, implement our custom Voyager design template, manage and setup the database and relationships, and load content from Voyager to the frontend.",
          tags: [{ tag: "laravel" }, { tag: "vue" }, { tag: "voyager" }],
          demoLink: "https://karelmuns.nl/",

          class: "laravel",
        },

        amsterdamlightfestival: {
          title: "Amsterdam Light Festival",
          cardImage: "images//amsterdamlightfestival4.png",

          detailCardImage: "images//amsterdamlightfestival5.png",
          body:
            "My role in this project was to serve as a full stack developer. Amsterdam Light Festival to upgrade the News Letter feature on their website. This project utalized VueJS on the frontend, and Mailchimp as the backend newsletter API. My job was to allows users to sign up for the newsletter, register the new user, and send them e-mails.",
          tags: [{ tag: "laravel" }, { tag: "vue" }, { tag: "mailchimp" }],

          demoLink: "https://amsterdamlightfestival.com/nl",

          class: "laravel",
        },

        custom_chrome_extension: {
          title: "Personal Chrome Extension",
          cardImage: "images//chromeextension.jpg",
          detailCardImage: "images//chromeextensiontryagain.png",
          body:
            "Chrome offers a good newtab page by default. However, I wanted something custom, and more personalised to me. My personal chrome extension is a new tab page with links to Github, linkedin, my email and a new site. It uses Ecosia as a default search engine.",
          tags: [{ tag: "javascript" }, { tag: "openweather" }],

          demoLink:
            "https://github.com/MyNameIsAres/Personal-Chrome-Extension/blob/master/README.md",
          codeLink: "https://github.com/MyNameIsAres/Personal-Chrome-Extension",
          class: "personal open-source",
        },

        elytra_death_handler: {
          title: "Elytra Death Handler",
          cardImage: "images//elytradeath.png",
          hasDetailImage: false,
          video: "videos//elytradisplay.mp4",
          body:
            "This project was created to provide servers with a better solution to return to a player's death location, after they died with an elytra, because of some server lag that resulted in a bad landing, or late rendering of a mountain/hill.",
          tags: [{ tag: "spigot" }, { tag: "java" }, { tag: "foundation" }],

          codeLink: "https://github.com/MyNameIsAres/ElytraDeathHandler",
          class: "personal open-source",
        },

        playerstorage: {
          title: "Player Storage plugin",
          cardImage: "images//detailimageplayerstorage.png",
          detailCardImage: "images//detailimageplayerstorage.png",
          body:
            "Player Storage is a plugin created to store player data in a MySQL or NoSQL database. We currently support MySQL only, but a NoSQL update is coming soon. A better, fluent JDBC/Spigot SQL API is coming soon, to support this project.",
          tags: [
            { tag: "spigot" },
            { tag: "java" },
            { tag: "foundation" },
            { tag: "mysql" },
          ],
          demoLink:
            "https://github.com/MyNameIsAres/PlayerStorage/blob/main/README.md",
          codeLink: "https://github.com/MyNameIsAres/PlayerStorage",
          class: "personal open-source",
        },

        playerdashboard: {
          title: "PlayerDashboard",
          cardImage: "images//comingsoonimage.png",
          detailCardImage: "images//newdetailimglaravel.png",
          body:
            "PlayerDashboard is a project connected to the PlayerStorage plugin project. It's developed with Laravel 8 and and Jetstream to serve as the authentication scaffolding. It's a website where players can view their own statistics and track which charities their donations go to, and how their donation is being used. The frontent is currently in development, but will be avaialble soon.",
          tags: [{ tag: "php" }, { tag: "laravel" }, { tag: "jetstream" }],
          class: "laravel",
        },

        betterwitches: {
          title: "Better Witches",
          cardImage: "images//betterwitchesimage.png",
          detailCardImage: "images//potentialwitch.png",
          body:
            "Better Witches is a plugin to improve the current Witch and Cauldron mechanics of Minecraft. This is accomplished by having different categories, tiers and variety of witches. Such as the Fire Witch, who primarily has fire-based attacks. All witches have a variety of new abilities, that are unique to the BetterWitches plugin. Players can now interact with cauldron and create special recipes and items, by using a Cauldron!",
          tags: [{ tag: "spigot" }, { tag: "java" }, { tag: "foundation" }],
          demoLink: "https://github.com/MyNameIsAres/BetterWitches",
          codeLink: "https://github.com/MyNameIsAres/BetterWitches",
          class: "personal open-source",
        },

        betterenchants: {
          title: "Better Enchants",
          cardImage: "images//enchantmenttable.png",
          video: "videos//grandescape.mp4",
          body:
            "Better Enchants is another plugin in the 'Better Plugins' plugin series. This plugin aims to create new, and exiciting enchantments for players, and create different enchantment mechanics for players to enjoy.",
          tags: [{ tag: "spigot" }, { tag: "java" }, { tag: "foundation" }],
          demoLink:
            "https://github.com/MyNameIsAres/CustomEnchants/blob/master/README.md",
          codeLink: "https://github.com/MyNameIsAres/CustomEnchants",
          class: "personal open-source",
        },
      },
    };
  },
};
</script>
