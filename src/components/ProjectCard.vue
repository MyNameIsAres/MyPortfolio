<template>
  <li
    v-for="project in projects"
    :key="project.title"
    class="thumbnail project-thumbnail"
    :class="[project.class]"
  >
    <div class="card">
      <img v-bind:src="project.cardImage" alt="test" />
      <div class="overlay">
        <div class="overlay-content">
          <h4 id="overlay-title">{{ project.title }}</h4>
          <ul>
            <li v-for="tag in project.tags" :key="tag.tag">
              {{ tag.tag }}
            </li>
          </ul>
          <div class="button-container">
            <button id="toggle" class="button">View Project</button>
          </div>
        </div>
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
            v-bind:href="project.demoLink"
            target="_blank"
            >Demo</a
          >

          <a
            v-if="project.codeLink"
            class="btn-detail links-container-button code-button"
            v-bind:href="project.codeLink"
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
          body: "My role in this project was to serve as one of three full stack developers.\n\n My primary responsiblities were to customize, manage and setup Voyager to serve as the CMS, implement our custom Voyager design template, manage and setup the database and relationships, and load content from Voyager to the frontend.",
          tags: [{ tag: "laravel" }, { tag: "vue" }, { tag: "voyager" }],
          demoLink: "https://karelmuns.nl/",
          class: "php",
        },

        amsterdamlightfestival: {
          title: "Amsterdam Light Festival",
          cardImage: "images//amsterdamlightfestival4.png",
          body: "My role in this project was to serve as a full stack developer. Amsterdam Light Festival to upgrade the News Letter feature on their website. This project utalized VueJS on the frontend, and Mailchimp as the backend newsletter API. My job was to allows users to sign up for the newsletter, register the new user, and send them e-mails.",
          tags: [{ tag: "laravel" }, { tag: "vue" }, { tag: "mailchimp" }],
          demoLink: "https://amsterdamlightfestival.com/nl",
          class: "php",
        },

        custom_chrome_extension: {
          title: "Personal Chrome Extension",
          cardImage: "images//chromeextension.jpg",
          body: "Chrome offers a good newtab page by default. However, I wanted something custom, and more personalised to me. My personal chrome extension is a new tab page with links to Github, linkedin, my email and a new site. It uses Ecosia as a default search engine.",
          tags: [{ tag: "javascript" }, { tag: "openweather" }],
          demoLink:
            "https://github.com/MyNameIsAres/Personal-Chrome-Extension/blob/master/README.md",
          codeLink: "https://github.com/MyNameIsAres/Personal-Chrome-Extension",
          class: "open-source",
        },

        elytra_death_handler: {
          title: "Elytra Death Handler",
          cardImage: "images//elytradeath.png",
          body: "This project was created to provide servers with a better solution to return to a player's death location, after they died with an elytra, because of some server lag that resulted in a bad landing, or late rendering of a mountain/hill.",
          tags: [{ tag: "spigot" }, { tag: "java" }, { tag: "foundation" }],
          demoLink: "https://github.com/MyNameIsAres/ElytraDeathHandler/blob/master/README.md",
          codeLink: "https://github.com/MyNameIsAres/ElytraDeathHandler",
          class: "java open-source",
        },

        betterwitches: {
          title: "Better Witches",
          cardImage: "images//betterwitchesimage.png",
          body: "Better Witches is a plugin created to create different varieties and more challenging witches, and bring new mechanics to the Cauldron item. This is accomplished by introducing custom pathfinding and dynamic targetting AI mechanics at runtime, along with a unique list of abilities that can be applied to witches.",
          tags: [{ tag: "spigot" }, { tag: "java" }, { tag: "foundation" }],
          demoLink: "https://github.com/MyNameIsAres/BetterWitches",
          codeLink: "https://github.com/MyNameIsAres/BetterWitches",
          class: "java open-source",
        },

        betterenchants: {
          title: "Better Enchants",
          cardImage: "images//enchantmenttable.png",
          body: "Better Enchants is another plugin in the 'Better Plugins' plugin series. This plugin aims to create new, and exiciting enchantments for players, and create different enchantment mechanics for players to enjoy. This plugin also includes a dynamic enchantment targetting mechanic, where enchantments can be aimed at a specific item, or a specific group of items.",
          tags: [{ tag: "spigot" }, { tag: "java" }, { tag: "foundation"}],
          demoLink:
            "https://github.com/MyNameIsAres/CustomEnchants/blob/master/README.md",
          codeLink: "https://github.com/MyNameIsAres/CustomEnchants",
          class: "open-source",
        },

        caveofremembrance: {
          title: "Cave of Remembrance",
          cardImage: "images//cor2.png",
          body: "This plugin was contracted by a Skyblock Minecraft server to accomodate a new exclusive shop area. This plugin is the shop component, where players can purchase exclusive items. Server administrators can dynamically add or remove shops, change the items and price in game, and much more. ",
          tags: [{ tag: "spigot" }, { tag: "java" }, { tag: "foundation" }],
          class: "java",
        },

        springcli: {
          title: "SpringCLI",
          cardImage: "images//springclitest1.png",
          body: "SpringCLI is a command-line tool to support developers utilizing Spring Boot. It includes different Git Bash commands to scaffold parts of a Spring Boot application.",
          tags: [{ tag: "java" }, { tag: "velocity" }, {tag: "picocli"}],
          demoLink: "https://github.com/MyNameIsAres/SpringCLI/blob/main/README.md",
          codeLink: "https://github.com/MyNameIsAres/SpringCLI",
          class: "java open-source"
        },

        foundationcli: {
          title: "FoundationCLI",
          cardImage: "images//clitest2.png",
          body: "FoundationCL is a command-line tool to support developers utilizing the Foundation library. It includes different Git Bash commands to scaffold parts of a Minecraft plugin. Like a command to scaffold an event listener, a menu, or an in-game command.",
          tags: [{ tag: "java" }, { tag: "velocity" }, {tag: "picocli"}],
          demoLink: "https://github.com/MyNameIsAres/FoundationCLI/blob/main/README.md",
          codeLink: "https://github.com/MyNameIsAres/FoundationCLI",
          class: "java open-source",
        },
      },
    };
  },
};
</script>
