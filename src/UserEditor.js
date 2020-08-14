import React from 'react';
import AreaAvatar from './components/AreaAvatar/AreaAvatar';
import TextEditor from './components/TextEditor/TextEditor';
import {getUserData} from './networkFunctions';

export default class UserEditor extends React.Component {
    constructor(props) {
        super(props);

        let {name, avatar, password} = this.props;

        this.state = {
            name,
            avatar,
            password,
        }
    }

    handleChange = (key) => async(text) => {
        let {email, updateData} = this.props;

        updateData({
            userData: await getUserData({
                email,
                [key]: text
            })
        });
    }

    render() {
        const {name, avatar, password} = this.state;
        
        return(
            <div class="flex-column">
                <AreaAvatar {...this.props} />
                <p>Name:</p>
                <TextEditor
                    placeholder="Name"
                    text={name}
                    onChangeText={this.handleChange('name')}
                />
                <p>Avatar url:</p>
                <TextEditor
                    placeholder="https://..."
                    text={avatar}
                    onChangeText={this.handleChange('avatar')}
                />
                <p>Password</p>
                <TextEditor
                    asterisk                    
                    text={password}
                    onChangeText={this.handleChange('password')}
                />
            </div>
        )
    }
}