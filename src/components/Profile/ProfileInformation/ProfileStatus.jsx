import React from 'react';
import style from './ProfileInformation.module.css'


class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState( {
      editMode: true
    })
  }

  deactivateEditMode = () => {
    this.setState( {
      editMode: false
    });
    this.props.updateStatus(this.state.status);
  }

  onStatusChange = (event) => {
      this.setState({
        status: event.target.value
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.status !== prevProps.status) {
      this.setState({
        status: this.props.status 
      })
    }
  }

  render() {
    return (
      <div className={style.content}>
        {!this.state.editMode &&
          <div>
            <span onDoubleClick={ this.activateEditMode }>{this.props.status || "No status"}</span>
          </div>
        }
        {this.state.editMode &&
          <div>
            <input onChange={ this.onStatusChange } autoFocus={true} onBlur={ this.deactivateEditMode } value={this.state.status} />
          </div>
        }
      </div>
    );
  }
}


export default ProfileStatus;