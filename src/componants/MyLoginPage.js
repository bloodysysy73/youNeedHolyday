import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin } from 'react-admin';
import '../assets/css/loginstyle.css';

import { Field, Form } from 'react-final-form';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import LockIcon from '@material-ui/icons/Lock';

import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockOpenIcon from '@material-ui/icons/LockOpen';

import { Notification } from 'react-admin';

class MyLoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = { loading: false };
    }

    submit = (e) => {
        e.preventDefault();
        this.setState({ loading: true })
        const credentials = {
            'username': e.target.elements["username"].value,
            'passeword': e.target.elements["password"].value
        };

        // Dispatch the userLogin action (injected by connect)
        this.props.userLogin(credentials);
    }

    renderInput = ({
        meta: { touched, error } = { touched: false, error: undefined },
        input: { ...inputProps },
        ...props
    }) => (
            <>
                <div className='userfield'>
                    <Grid justify="center" container spacing={1} alignItems="flex-end">
                        <Grid item>
                            {props.label === 'username' ? <AccountCircle color="primary" /> : <LockOpenIcon color="primary" />}
                        </Grid>
                        <Grid item>
                            <TextField  {...inputProps}
                                {...props}
                                fullWidth
                                id="input-with-icon-grid"
                                label={props.label} />
                        </Grid>
                    </Grid>
                </div>
            </>
        );



    validate = (values) => {
        const errors = {};
        if (!values.username) {
            errors.username = 'required';
        }
        if (!values.password) {
            errors.password = 'required';
        }
        return errors;
    };


    render() {
        return (
            <Form
                onSubmit={this.submit}
                validate={this.validate}
                render={({ submit }) => (
                    <form onSubmit={this.submit} >
                        <div className='main'>
                            <Card className='card'>

                                <img src={require('../assets/images/Logo-SERIAL-PTC.png')} alt="" className="image" /><br />
                                <div className='avatar'>

                                    <Avatar className='icon'>
                                        <LockIcon />
                                    </Avatar>
                                </div>

                                <div className='form'>

                                    <div className="text">
                                        <strong>Welcome to the MySerial application!</strong><br />
                                    You must authenticate yourself to continue your navigation.</div>

                                    <div className='input'>
                                        <Field
                                            autoFocus
                                            name="username"
                                            // @ts-ignore
                                            component={this.renderInput}
                                            label={'username'}
                                            disabled={this.state.loading}
                                        />
                                    </div>
                                    <div className='input'>
                                        <Field
                                            name="password"
                                            // @ts-ignore
                                            component={this.renderInput}
                                            label='password'
                                            type="password"
                                            disabled={this.state.loading}
                                        />
                                    </div>
                                </div>
                                <CardActions className='actions'>
                                    <Button
                                        variant="contained"
                                        type="submit"
                                        color="primary"
                                        disabled={this.state.loading}

                                    >
                                        {this.state.loading && (
                                            <CircularProgress
                                                size={25}
                                                thickness={2}
                                            />
                                        )}
                                        {'CONNECT'}
                                    </Button>
                                </CardActions>
                            </Card>
                            <Notification />
                        </div>
                    </form>
                )}
            />
        );
    }
};

export default connect(undefined, { userLogin })(MyLoginPage);