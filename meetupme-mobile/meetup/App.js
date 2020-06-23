import { Text, View } from 'react-native';


import React from 'react';
import axios from 'axios';



export default class MeetupList extends React.Component {
        state = {
            meetupList:[],
        };
        
        componentDidMount(){
            axios.get(`http://localhost:7000/api/meetups`)
            .then(res => {
                console.log(res.data);
                this.setState({meetupList: res.data.meetups});
            })
        }

        render(){
            return(
            <View>
            {this.state.meetupList.map(meetup =><Text>{meetup.title}</Text>)}
            </View>
            )
        }
}