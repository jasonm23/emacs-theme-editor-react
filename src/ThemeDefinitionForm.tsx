import * as React from 'react';

import { 
    Card,
    CardBody,
    CardTitle,
    Input,
    ListGroup,
    ListGroupItem,
} from 'reactstrap';

class ThemeDefinitionForm extends React.Component<{},{}> {
    public render() {
        return (
            <Card>
                <CardBody>
                    <CardTitle>Theme</CardTitle>
                    <Input placeholder="Name" />
                    <ListGroup>
                        <ListGroupItem>background</ListGroupItem>
                        <ListGroupItem>foreground</ListGroupItem>
                        <ListGroupItem>keywords</ListGroupItem>
                        <ListGroupItem>comments</ListGroupItem>
                        <ListGroupItem>builtins</ListGroupItem>
                        <ListGroupItem>classtype</ListGroupItem>
                        <ListGroupItem>variables</ListGroupItem>
                        <ListGroupItem>constants</ListGroupItem>
                        <ListGroupItem>strings</ListGroupItem>
                        <ListGroupItem>functions</ListGroupItem>
                        <ListGroupItem>cursor</ListGroupItem>
                        <ListGroupItem>region</ListGroupItem>
                        <ListGroupItem>secondary selection</ListGroupItem>
                        <ListGroupItem>fringe</ListGroupItem>
                        <ListGroupItem>modeline bg</ListGroupItem>
                        <ListGroupItem>modeline fg</ListGroupItem>
                        <ListGroupItem>minibuffer</ListGroupItem>
                    </ListGroup>
                </CardBody>
            </Card>
        );
    }
}

export default ThemeDefinitionForm;