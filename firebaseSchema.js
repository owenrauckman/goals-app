export default {
  users: [
    {
      uid: "",
      name: "",
      age: "",
      email: "",
      password: "",
      social: "", // optional, other forms of auth, FB, Google, etc.
      creationDate: "",
      successScore: "",
      isPremium: "", // may not be needed
      weeks: ["ref", "ref"], // how to get most recent week?
      goals: ["ref", "ref"] // so we don't have to fish through ALL weeks in a goal view
    }
  ],
  // Load weeks like pagination on the main view
  weeks: [
    {
      id: "",
      startDateTime: "", // ensure zulu timestamp for timezones
      endDateTime: "",
      goals: [{}, {}], // REFS
      // CLOUD FUNCTION GENERATED: Once a week, when user opens the app, run a func to check what goals others are doing, get top 3 similar, queue up (1/5) card swipe
      showPushNotification: "",
      pushNotification: "",
      pushNotifationDateTime: "",
      encouragements: [
        {
          title: "",
          description: "",
          imageUrl: "", // possibly an array of random topical images
          ctaText: "",
          ctaSource: ""
        }
      ]
    }
  ],
  goals: [
    {
      id: "",
      type: "",
      title: "",
      description: "",
      imageUrl: "",
      startDateTime: "", // this, along with completions can help calculate successScore
      currentWeekSelectedDays: {
        sunday: false,
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false
      },
      nextWeekSelectedDays: {
        sunday: false,
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false
      },
      currentWeekCompletionGoal: 0, // if this is set, ignore selectedDays
      nextWeekCompletionGoal: 0,
      completions: ["", ""] // DATE STRINGS or objects with date: str, completed: bool. streak, best  might be calced instead of stored
    }
  ],
  // EXPLORE PAGE GOALS, STORE ON STATIC SERVER FOR EASY UPDATES + SIGNIFICANTLY LESS FIRESTORE CALLS (downside is no user generated content)
  exploreGoals: [
    {
      id: "static_guid", // prevent firestore clashes with a static prefix before our guid generation
      type: "",
      title: "",
      description: "",
      imageUrl: ""
      // consider putting in DB to track how many users have this goal. COULD also run query to COUNT users with TYPE like this though
    }
  ]
};

/*
  UI TODOS:
  - this week vs next week edit mode in goals 
  - calendar view popup for goal 
  - view all goals page 
  - carry over to next week (cloud function cron job or auto carry over) 
  - encouragements updates
  - profile updates + preferences (i.e. show encouragement notifications?)
  - success score 
  - Does Daily card need list of images? Or does header need a redesign? footer cleanup?
  - add goal section (unsplash integration, or maybe not) -- these are not public, just private
*/
