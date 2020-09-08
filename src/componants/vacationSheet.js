import * as React from 'react'
import {
    List,
    SimpleList,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton, Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    Create,
    Filter,
    DateInput,
} from 'react-admin';
import { useMediaQuery } from '@material-ui/core';
import db from '../variables/firebase';

const retrievepermission = () => {
    let userEmail = localStorage.getItem('userEmail');
    let words = userEmail.split('@');
    let userId = words[0];
    var isadmin;

    db.ref('/users/' + userId).once('value').then(function (snapshot) {
        isadmin = snapshot.val().groups ? snapshot.val().groups.administrator : false;
        localStorage.setItem('permissions', isadmin);
        console.log('isadmin');
        return isadmin;
    }).catch(function (error) {
        console.log('is not admin', isadmin);
        return false;
    });
}

export const VacationSheetList = ({ permissions, ...props }) => {

    retrievepermission();

    //pour les petit écran : on retournera simpleList si écran de téléphone, Datagrid si desktop
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    console.log('promesse', permissions);

    return (
        <List filters={<VacationSheetFilter />}{...props}>
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.title}
                    secondaryText={record => `date de début/fin : ${record.dateDebut} / ${record.dateFin}`}
                    tertiaryText={record => new Date(record.datePose).toLocaleDateString()}
                />
            ) : (
                    <Datagrid>
                        <TextField source="id" />
                        <ReferenceField label="User" source="userId" reference="users">
                            <TextField source="name" />
                        </ReferenceField>
                        <TextField source="datePose" label="posé le" />

                        <TextField source="dateDebut" />

                        <TextField source="dateFin" />
                        {/* {permissions === 'admin' && <EditButton />} */}
                        {<EditButton />}
                    </Datagrid>
                )}
        </List>
    );
}

export const VacationSheetEdit = props => (
    <Edit title={<VacationSheetTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="users"><SelectInput optionText="name" /></ReferenceInput>

            <DateInput source="dateDebut" />

            <DateInput source="dateFin" />
        </SimpleForm>
    </Edit>);

export const VacationSheetCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" /></ReferenceInput>

            <DateInput source="dateDebut" />

            <DateInput source="dateFin" />

        </SimpleForm>
    </Create>);

const VacationSheetTitle = ({ record }) => {
    return <span>VacationSheet {record ? `"${record.title}"` : ''} </span>;
}

const VacationSheetFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search id" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);
