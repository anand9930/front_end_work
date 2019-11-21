const editor = new EditorJS({
  /**
   * Id of Element that should contain the Editor
   */

  /**
   * Available Tools list.
   * Pass Tool's class or Settings object for each Tool you want to use
   */

  tools: {
    header: {
      class: Header,
      inlineToolbar: ["link"]
    },
    list: {
      class: List,
      inlineToolbar: true
    },

    image: SimpleImage,
    embed: {
      class: Embed,
      config: {
        services: {
          youtube: true,
          coub: true
        }
      }
    },
    code: CodeTool
  }
});

let savbtn = document.querySelector("button");
savbtn.addEventListener("click", function() {
  editor
    .save()
    .then(outputData => {
      console.log("Article data: ", outputData);
    })
    .catch(error => {
      console.log("Saving failed: ", error);
    });
});
