"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// console.log("App.js file is running");

// const app = {
//     title : "Indicision App",
//     subTitle : "Currently its in development phase",
//     option : []
// }

// const onFormSubmit = (e) => {
//     e.preventDefault();
//     const option = e.target.elements.option.value;
//     if(option){
//         appInfo.option.push(option);
//         e.target.elements.option.value = '';
//     }
//     UpdateList();
//     console.log(appInfo.option);
// };

// const RemoveAll  = () => {
//     appInfo.option = [];
//     UpdateList();
// };


// var appRoot = document.getElementById('app');

// var UpdateList = () => {
//     // JSX - Javascript XML.
// var template = (
//     <div>
//         <h1>{appInfo.title}</h1>
//         {(appInfo.subTitle && <p>{appInfo.subTitle}</p>)}
//         {(appInfo.option && appInfo.option.length > 0) ? <p>Options are available</p> : undefined}
//         <p>{appInfo.option.length}</p>
//         <button onClick={RemoveAll}>Remove All</button>
//         <ol>
//             <li>Denis</li>
//             <li>Godhani</li>
//         </ol>
//         <form onSubmit={onFormSubmit}>
//             <input type="text" name="option"/>
//             <button>Add Option</button>
//         </form>
//     </div>
// );

//     ReactDOM.render(template, appRoot);

// }


// UpdateList();

var obj = {
    name: "Denis",
    getName: function getName() {
        return this.name;
    }
};

// stateless functional component.

var getName = obj.getName.bind({ name: 'Deniiii' });

console.log(getName());

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.state = {
            options: props.options
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            try {
                var json = localStorage.getItem("options");
                var options = JSON.parse(json);
                if (options) {
                    this.setState(function () {
                        return { options: options };
                    });
                }
            } catch (e) {
                //Do nothing
            }
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(preProps, preState) {
            if (preState.options.length != this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem("options", json);
            }
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            console.log("componentWillUnmount");
        }
    }, {
        key: "handleDeleteOptions",
        value: function handleDeleteOptions() {
            // this.setState(() => {
            //     return {
            //         options: []
            //     }
            // });

            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: "handleDeleteOption",
        value: function handleDeleteOption(optionToRemove) {
            this.setState(function (preState) {
                return {
                    options: preState.options.filter(function (option) {
                        return optionToRemove !== option;
                    })
                };
            });
        }
    }, {
        key: "handlePick",
        value: function handlePick() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[randomNum];
            alert(option);
        }
    }, {
        key: "handleAddOption",
        value: function handleAddOption(option) {
            if (!option) {
                return 'Enter valid value to add item';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'This option already exists';
            }

            // this.setState((preState) => {
            //     return {
            //         options: preState.options.concat(option)
            //     }
            // });

            this.setState(function (preState) {
                return { options: preState.options.concat(option) };
            });
        }
    }, {
        key: "render",
        value: function render() {

            var title = "Indecision App";
            var subTitle = "Put your life in the hands os a computer";

            return React.createElement(
                "div",
                null,
                React.createElement(Header, { subTitle: subTitle }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    handlePick: this.handlePick
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions,
                    handleDeleteOption: this.handleDeleteOption
                }),
                React.createElement(AddOption, { handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
    options: []
};

var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.title
        ),
        props.subTitle && React.createElement(
            "h2",
            null,
            props.subTitle
        )
    );
};

Header.defaultProps = {
    title: "Indecision"
};
// class Header extends React.Component {

//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subTitle}</h2>
//             </div>
//         );
//     }

// }

var Action = function Action(props) {
    return React.createElement(
        "button",
        { onClick: props.handlePick,
            disabled: !props.hasOptions
        },
        "What should I do?"
    );
};

// class Action extends React.Component {

//     render() {
//         return (
//             <button onClick={this.props.handlePick}
//             disabled = {!this.props.hasOptions}
//             >
//             What should I do?</button>
//         );
//     }
// }


var Options = function Options(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { onClick: props.handleDeleteOptions },
            "Remove All"
        ),
        props.options.length === 0 && React.createElement(
            "p",
            null,
            "Add an option to get started!"
        ),
        props.options.map(function (option) {
            return React.createElement(Option, {
                key: option,
                optionTest: option,
                handleDeleteOption: props.handleDeleteOption });
        })
    );
};

// class Options extends React.Component {

//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {
//                     this.props.options.map((option) => <Option key={option} optionTest={option} />)
//                 }
//             </div>
//         )
//     }
// }

var Option = function Option(props) {
    return React.createElement(
        "div",
        null,
        props.optionTest,
        React.createElement(
            "button",
            { onClick: function onClick(e) {
                    props.handleDeleteOption(props.optionTest);
                }
            },
            "remove"
        )
    );
};

// class Option extends React.Component {
//     render(){
//         return(
//             <div>
//                 <p>{this.props.optionTest}</p>
//             </div>
//         )
//     }
// }

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: "handleAddOption",
        value: function handleAddOption(e) {
            e.preventDefault();

            var option = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(option);
            // this.setState(() => {
            //     return { error };
            // });

            this.setState(function () {
                return { error: error };
            });

            if (!error) {
                e.target.elements.option.value = '';
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.state.error && React.createElement(
                    "p",
                    null,
                    this.state.error
                ),
                React.createElement(
                    "form",
                    { onSubmit: this.handleAddOption },
                    React.createElement("input", { type: "text", name: "option" }),
                    React.createElement(
                        "button",
                        null,
                        "Add Option"
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

var jsx = React.createElement(
    "div",
    null,
    React.createElement(Header, null),
    React.createElement(Action, null),
    React.createElement(Options, null),
    React.createElement(AddOption, null)
);

// const User = (props) => {

//     return (
//         <div>
//         <p>Name: {props.name}</p>
//         <p>Age: {props.age}</p>
//         </div>
//     )

// };

ReactDOM.render(React.createElement(IndecisionApp, { options: ['Denis', 'Godhani'] }), document.getElementById('app'));
