import React, { useState } from "react";
import Uncontrolled from "./components/Uncontrolled";

export default function App() {
  const [skills, setSkills] = useState([{ skill: "JavaScript", level: 4 },{ skill: "Python", level: 2 },{ skill: "Scrum", level: 3 }])

  const [form, setForm] = useState({
    skill: "",
    level: "3"
  })
  function addSkill(event) {
    // prevent the refreshing
    event.preventDefault()
    //console.log the form state
    console.log(form)
    // create a copy of skills
    const newState = [...skills]
    // add the new skill
    newState.push(form)
    // update the state
    setSkills(newState)
    // reset the form
    setForm({
      skill: "",
      level: "3"
    })
  }

  function handleChange(event){
    // const newState = {...form}
    // newState[event.target.name] = event.target.value
    // setForm(newState)
    setForm({...form, [event.target.name]: event.target.value})
  }

  return (
    <section>
      <Uncontrolled/>
      <h2>DEV SKILLS</h2>
      <hr />
      {skills.map((s) => (
        <article key={s.skill}>
          <div>{s.skill}</div> <div>{s.level}</div>
        </article>
      ))}
      <hr />
      <form>
        <label>
          <span>SKILL</span>
          <input name="skill" value={form.skill} onChange={handleChange} />
        </label>
        <label>
          <span>LEVEL</span>
          <select name="level" value={form.level} onChange={handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <button onClick={addSkill}>ADD SKILL</button>
      </form>
    </section>
  );
}