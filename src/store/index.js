import { createStore } from 'vuex'
import axios from 'axios'
import  Swal from 'sweetalert2/dist/sweetalert2'
const portfolioData = 'https://awhendr261101.github.io/vueMockEOMP/data/resources.json'

export default createStore({
  state: {
    jobtitle : null,
    about: null,
    education: null,
    experience: null,
    skills: null,
    testimonials: null,
    projects: null,
  },
  getters: {
  },
  mutations: {

    setJobtitle(state, jobtitle) {state.jobtitle = jobtitle},
    setAbout(state, about) {state.about = about},
    setEducation(state, education) { state.education = education},
    setExperience(state,Experience) { state.experience =Experience},
    setSkills(state, skills) { state.skills = skills},
    setTestimonials(state, testimonials) { state.testimonials = testimonials},
    setProjects(state, projects) { state.projects = projects}

  },
  actions: {
    async getPortfolioData(context){
      try {
        const response = await axios.get(portfolioData)
        console.log(response.data);
        context.commit('setJobtitle', response.data.jobTitle)
        context.commit('setAbout', response.data.About)
        context.commit('setEducation', response.data.education)
        context.commit('setExperience', response.data.experience)
        context.commit('setSkills', response.data.skills)
        context.commit('setTestimonials', response.data.testimonials)
        context.commit('setProjects', response.data.projects)
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href>Why do I have this issue?</a>',
          timer: 2000
        })
        console.log(error)
      }
    }
  },

  modules: {
  }
})
