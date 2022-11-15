<template>
  <teleport to="#modal">
    <form v-if="showForm">
    <p>Add New Event</p>
  </form>
  </teleport>
  


  <div class="options">
    <button @click="showPastEvents = !showPastEvents">{{showPastEvents ? 'Hide Past Events': 'Show Past Events'}}</button>
    <button class="addNew" @click="showForm = !showForm">&#43;</button>
  </div>
  <ul>
    <li v-for="event in orderEvents" :key="event.id">
      <Event 
      :event="event" 
      :daysLeft="daysLeft(event)"
      :showPastEvents = "showPastEvents"

      />
    </li>
  </ul>
  
</template>

<script>

const eventData = [
  {
    id: 1,
    name: "Graduation",
    details: "wooohoo!!!",
    date: "2023-09-25",
    background: "#F34949",
  },
  {
    id: 2,
    name: "Holidays",
    details: "wooohoo!!!",
    date: "2022-11-16",
    background: "#f9f970",
  },
  {
    id: 3,
    name: "Mashujaa Day",
    details: "Get me outta here!",
    date: "2022-10-20",
    background: "#7AD3F0",
  },
  {
    id: 4,
    name: "Birthday",
    details: "My birthday party",
    date: "2022-12-30",
    background: "#F07AEC",
  },
  {
    id: 5,
    name: "Christmas",
    details: "ho ho ho",
    date: "2022-12-25",
    background: "#EB9A0F",
  },
  {
    id: 6,
    name: "Conference Talk",
    details: "dont flop",
    date: "2022-11-16",
    background: "#68EE94",
  },
];



import Event from './components/TaskEvent.vue'

export default {
  name: 'App',
  components: {
    Event
  },
  data(){
    return{
      events: eventData,
      showPastEvents: false,
      showForm : false
    }
  },
  methods:{
    daysLeft(event){
      const time =  Date.parse(event.date) - Date.now() 
      const days = Math.ceil(time / (1000 * 60 * 60 * 24))
      // console.log(days);
      // console.log(Date.parse(event.date));
      // console.log(Date.now());
      // console.log(time);

      return days
    }
  },
  computed: {
    orderEvents(){
      const eventsToOrder = this.events
      return eventsToOrder.sort((a,b) => a.date > b.date ? 1 : -1)
    }
  }
  
}
</script>


<style>
#app{
  font-family: Avenir,Helvetica,Arial,sans-serif;
  max-width: 600px;
  margin: 0 auto;
}
ul{
  padding:0;
}
li{
  list-style: none;
  cursor: pointer;
}
</style>