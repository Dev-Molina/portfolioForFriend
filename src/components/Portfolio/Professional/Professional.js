import React from "react";
import ProjectTemplate from "./ProjectTemplate";

class Professional extends React.Component {
  constructor() {
    super();
    this.state = {
      selection: 1,
      underline1: "active",
      underline2: "",
      underline3: "",
      underline4: "",
      underline5: "",
      underline6: "",
      project: "Digital Circular React App"
    };
  }

  componentDidMount(){
    new Image().src = "https://s3.amazonaws.com/s3.rubayth.com/portfolio/professional/prdc-page.jpg";
    new Image().src = "https://s3.amazonaws.com/s3.rubayth.com/portfolio/professional/lowes-foods.png";
    new Image().src = "https://s3.amazonaws.com/s3.rubayth.com/portfolio/professional/dg-halloween.png";
    new Image().src = "https://s3.amazonaws.com/s3.rubayth.com/portfolio/professional/spr-script.jpg";
    new Image().src = "https://s3.amazonaws.com/s3.rubayth.com/portfolio/professional/lowes-script.jpg";
  }
  onBtnPress(selection) {
    const key = "underline" + selection;

    this.setState({
      underline1: "",
      underline2: "",
      underline3: "",
      underline4: "",
      underline5: "",
      underline6: ""
    });

    this.setState({
      selection,
      [key]: "active"
    });

    switch (selection) {
      case 1: {
        return this.setState({ project: "Digital Circular React App" });
      }
      case 2:
        return this.setState({ project: "Lowes Foods Fall LP" });
      case 3:
        return this.setState({ project: "DG Halloween Landing Page" });
      case 4:
        return this.setState({ project: "Email Template Script" });
      case 5:
        return this.setState({ project: "Lowes Script" });
      default:
        return this.setState({ project: "Lowes Node Script" });
    }
  }

  renderDescription() {
    switch (this.state.selection) {
      case 1: {
        return (
          <ProjectTemplate
            title="Digital Circular"
            position="Lead React Developer"
            status="In development"
            li={[
              "Makes a call to our API to receive JSON data of offers to be displayed.",
              "Created logic to group raw data together based on promotion type into reusable components.",
              "Developed using React + Redux, Node + Express, Bootstrap, SCSS/CSS.",
              "From wireframe to WordPress mock up to React"
            ]}
            button={{
              0: {
                href: "https://github.com/rubayth/digital-circular",
                description: "View code on GitHub"
              },
              1: {
                href: "https://app.rubayth.com/digital-circular",
                description: "Try it Out!"
              }
            }}
            img="https://s3.amazonaws.com/s3.rubayth.com/portfolio/professional/prdc-page.jpg"
          />
        );
      }
      case 2:
        return (
          <ProjectTemplate
            title="Lowes Foods Fall"
            position="Front-End Developer"
            status="In process to production"
            li={[
              "Collabated with designers to meet their requirments",
              "Converted PSD into a functional web page",
              "Mobile first, responsive layout, Bootstrap-based",
              "Developed using HTML, SCSS/CSS, JS/jQuery"
            ]}
            button={{
              0: {
                href: "http://rubayth.gitlab.io/lowes-foods-fall/",
                description: "View Page"
              }
            }}
            img="https://s3.amazonaws.com/s3.rubayth.com/portfolio/professional/lowes-foods.png"
          />
        );
      case 3:
        return (
          <ProjectTemplate
            title="Halloween Page"
            position="Front-End Developer"
            status="In production"
            li={[
              "Converted PSD into a functional web page",
              "Configured and pushed to Magento CMS",
              "Usage of Monetate experiences",
              "Developed using HTML, SCSS/CSS, JS/jQuery"
            ]}
            button={{
              0: {
                href: "https://www.dollargeneral.com/seasonal/halloween.html",
                description: "View Page"
              }
            }}
            img="https://s3.amazonaws.com/s3.rubayth.com/portfolio/professional/dg-halloween.png"
          />
        );
      case 4:
        return (
          <ProjectTemplate
            title="Email Template Script"
            position="Scripting/Front-End"
            status="Actively in use"
            li={[
              "Reads data from a spreadsheet and builds a templated HTML email",
              "Reduced development time from hours to minutes",
              "Developed using Javascript on Node.js with documentation on GitLab!"
            ]}
            button={{
              0: {
                href: "https://gitlab.com/rubayth/spr-script",
                description: "View code on GitLab"
              }
            }}
            img="https://s3.amazonaws.com/s3.rubayth.com/portfolio/professional/spr-script.jpg"
          />
        );
      case 5:
        return (
          <ProjectTemplate
            title="Lowes Node Script"
            position="Scripting"
            status="Assets delivered"
            li={[
              "Ask: Create hundreds of HTML files containing an image for Lowes.",
              "Solution: Write a script that reads data from a spreadsheet to build HTML through a template.",
              "Programmed using Javascript on Node.js"
            ]}
            button={{
              0: {
                href: "https://gitlab.com/rubayth/lowes-node-script",
                description: "View code on GitLab"
              }
            }}
            img="https://s3.amazonaws.com/s3.rubayth.com/portfolio/professional/lowes-script.jpg"
          />
        );
      case 6:
        return <h1>{this.state.selection}</h1>;
      default:
        return <h1>default</h1>;
    }
  }
  render() {
    return (
      <div className="professional animated fadeIn">
        <div className="container">
          <div className="row full-height align-items-center">
            <div className="col-12 col-container">
              <div className="row align-items-center p-3">
                <div className="col-md-3 col-12">
                  <div className="dropdown d-md-none mb-2">
                    <button
                      className="btn btn-primary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {this.state.project}
                    </button>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <button
                        className="dropdown-item"
                        onClick={() => this.onBtnPress(1)}
                      >
                        Digital Circular React App
                      </button>
                      <button
                        className="dropdown-item"
                        onClick={() => this.onBtnPress(2)}
                      >
                        Lowes Foods Fall LP
                      </button>
                      <button
                        className="dropdown-item"
                        onClick={() => this.onBtnPress(3)}
                      >
                        Dollar General Halloween Landing Page
                      </button>
                      <button
                        className="dropdown-item"
                        onClick={() => this.onBtnPress(4)}
                      >
                        Email Template Script
                      </button>
                      <button
                        className="dropdown-item"
                        onClick={() => this.onBtnPress(5)}
                      >
                        Lowes Node Script
                      </button>
                    </div>
                  </div>
                  <div className="list-group d-none d-md-block">
                    <button
                      onClick={() => this.onBtnPress(1)}
                      className="list-group-item list-group-item-action"
                    >
                      <strong className={"underline " + this.state.underline1}>
                        Digital Circular React App
                      </strong>
                    </button>

                    <button
                      onClick={() => this.onBtnPress(2)}
                      className="list-group-item list-group-item-action"
                    >
                      <strong className={"underline " + this.state.underline2}>
                        Lowes Foods Fall LP
                      </strong>
                    </button>

                    <button
                      onClick={() => this.onBtnPress(3)}
                      className="list-group-item list-group-item-action"
                    >
                      <strong className={"underline " + this.state.underline3}>
                        Dollar General Halloween Landing Page
                      </strong>
                    </button>

                    <button
                      onClick={() => this.onBtnPress(4)}
                      className="list-group-item list-group-item-action"
                    >
                      <strong className={"underline " + this.state.underline4}>
                        Email Template Script
                      </strong>
                    </button>

                    <button
                      onClick={() => this.onBtnPress(5)}
                      className="list-group-item list-group-item-action"
                    >
                      <strong className={"underline " + this.state.underline5}>
                        Lowes Node Script
                      </strong>
                    </button>
                  </div>
                </div>
                <div className="col-12 col-md-9">
                  {this.renderDescription()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Professional;
