import * as React from 'react'
import {
    List,
    SimpleList ,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton, Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    Create,
    Filter
} from 'react-admin';
import { useMediaQuery } from '@material-ui/core';


export const VacationSheetList = props => {

    //pour les petit écran : on retournera simpleList si écran de téléphone, Datagrid si desktop
    const isSmall = useMediaQuery(theme=> theme.breakpoints.down('sm'));
    return (
        <List filters={<VacationSheetFilter />}{...props}>
        {isSmall ? (
            <SimpleList
                primaryText={record => record.title}
                secondaryText={record => `${record.views} views`}
                tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
            />
        ) : (
            <Datagrid>
                <TextField source="id" />
                <ReferenceField label="User" source="userId" reference="users">
                    <TextField source="name" />
                </ReferenceField>
                <TextField source="title" />
                <TextField source="body" />
                <EditButton />
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
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>);

export const VacationSheetCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" /></ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>);

const VacationSheetTitle = ({ record }) => {
    return <span>VacationSheet {record ? `"${record.title}"` : ''} </span>;
}

const VacationSheetFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);