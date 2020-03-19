import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import {
  List,
  Loader,
  Dimmer,
  Placeholder,
  Segment,
  Image,
  Grid,
  Divider,
  Icon,
  Button,
  Header,
  Search,
  Table,
  Menu,
  Label,
  Container
} from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div>
        <Segment placeholder>
          <Grid columns={2} stackable textAlign='center'>
            <Divider vertical>Or</Divider>

            <Grid.Row verticalAlign='middle'>
              <Grid.Column>
                <Header icon>
                  <Icon name='search' />
                  Cari document
                </Header>

                <Search placeholder='Search document...' />
              </Grid.Column>

              <Grid.Column>
                <Header icon>
                  <Icon name='pdf file outline' />
                  Tambah Document Baru
                </Header>
                <Button primary>Create Document</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>

          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </Segment>

        <Grid columns={3} stackable>
          <Grid.Column width={5}>
            <Segment raised>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line length='medium' />
                  <Placeholder.Line length='short' />
                </Placeholder.Paragraph>
              </Placeholder>
            </Segment>
          </Grid.Column>

          <Grid.Column width={6}>
            <Segment raised>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line length='medium' />
                  <Placeholder.Line length='short' />
                </Placeholder.Paragraph>
              </Placeholder>
            </Segment>
          </Grid.Column>

          <Grid.Column width={4}>
            <List>
              <List.Item>
                <List.Icon name='linkify' />
                <List.Content>
                  <a href='http://www.google.com'>Google</a>
                </List.Content>
              </List.Item>
            </List>
            <List>
              <List.Item>
                <List.Icon name='linkify' />
                <List.Content>
                  <a href='http://www.facebook.com'>Facebook</a>
                </List.Content>
              </List.Item>
            </List>
            <List>
              <List.Item>
                <List.Icon name='linkify' />
                <List.Content>
                  <a href='http://www.semantic-ui.com'>Semantic UI</a>
                </List.Content>
              </List.Item>
            </List>
            <List>
              <List.Item>
                <List.Icon name='linkify' />
                <List.Content>
                  <a href='http://www.niomic.com'>Niomic</a>
                </List.Content>
              </List.Item>
            </List>
            <List>
              <List.Item>
                <List.Icon name='linkify' />
                <List.Content>
                  <a href='http://www.react.org'>React</a>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid>

        
        <Grid columns={3} stackable>
          <Grid.Column width={2}></Grid.Column>

          <Grid.Column width={12}>
            <Container>
              
            </Container>
            
            <Table celled>
            <Table.Header>
              <Table.HeaderCell colSpan='2'>
                <Search aligned="right" placeholder='Search document...' />
              </Table.HeaderCell>
              <Table.Row textAlign='center'>
                <Table.HeaderCell>Nama Document</Table.HeaderCell>
                <Table.HeaderCell>Jenis File</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Label ribbon>Panduan Belajar Javascript</Label>
                </Table.Cell>
                <Table.Cell textAlign='center'>PDF</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Panduan Belajar CSS</Table.Cell>
                <Table.Cell textAlign='center'>PDF</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Panduan Belajar React JS</Table.Cell>
                <Table.Cell textAlign='center'>PDF</Table.Cell>
              </Table.Row>
            </Table.Body>

            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan='3'>
                  <Menu floated='right' pagination>
                    <Menu.Item as='a' icon>
                      <Icon name='chevron left' />
                    </Menu.Item>
                    <Menu.Item as='a'>1</Menu.Item>
                    <Menu.Item as='a'>2</Menu.Item>
                    <Menu.Item as='a'>3</Menu.Item>
                    <Menu.Item as='a'>4</Menu.Item>
                    <Menu.Item as='a' icon>
                      <Icon name='chevron right' />
                    </Menu.Item>
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
          </Grid.Column>

          <Grid.Column width={2}></Grid.Column>
        </Grid>
        
      </div>
    );
  }
}

export default App;
