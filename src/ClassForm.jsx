import React, { Component } from "react";
import image from "./image/undraw_opened_re_i38e.svg";

export default class ClassForm extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
        };
    }
    handleSubmiit = (e) => {
        e.preventDefault();
        console.log(this.state);
    };

    render() {
        return (
            <div>
                <form action="">
                    <section className="image">
                        <img src={image} alt="" />
                    </section>
                    <section>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            onChange={(e) =>
                                this.setState({ name: e.target.value })
                            }
                        />{" "}
                        <label htmlFor="email">Email:</label>
                        <input
                            type="text"
                            id="email"
                            onChange={(e) =>
                                this.setState({ email: e.target.value })
                            }
                        />
                        <label htmlFor="pass">Password:</label>
                        <input
                            type="text"
                            id="pass"
                            onChange={(e) =>
                                this.setState({ password: e.target.value })
                            }
                        />
                        <button type="submit" onClick={this.handleSubmiit}>
                            Submit
                        </button>
                    </section>
                </form>
            </div>
        );
    }
}
