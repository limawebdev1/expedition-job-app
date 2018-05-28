class TextInput extends Component {
  constructor() {
    super();
  }
  render() {
    const { error, touched } = this.props.meta;
    return (
      <div className={this.props.className}>
        <label htmlFor={this.props.input.name} className={touched && error ? 'error' : ''}>{this.props.labelText} {touched && error ? error : ''}</label>
        <input {...this.props.input} type={this.props.type} required={this.props.required} maxLength={this.props.maxLength} className={touched && error ? 'validate error' : 'validate'} />
      </div>
    );
  }
}

export default TextInput;