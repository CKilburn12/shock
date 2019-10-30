import React, { Component } from 'react';
import Section from '../../components/ui/Section';
import Form from '../../components/ui/Form';

class ProfileView extends Component
{
  render()
  {
    return (
        <div>
            <Section title="Profile">
                <form>
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input id="name" className="form-control" type="text"></input>
                    </div>

                    <div className="form-group">
                        <label for="username">Username</label>
                        <input id="username" className="form-control" type="text" value="misaig" readonly="true"></input>
                    </div>

                    <div className="form-group">
                        <label for="bio">Bio</label>
                        <textarea id="bio" className="form-control" type="text">

                        </textarea>
                    </div>
                </form>
            </Section>

            <Section title="Preferences">
                <Form model={[
                    {
                        type: "option",
                        label: "How tidy of a person are you?",
                        options: [
                            "1 (Messy)",
                            "2",
                            "3",
                            "4",
                            "5 (Very Tidy)"
                        ]
                    },
                    {
                        type: "option",
                        label: "How social are you?",
                        options: [
                            "1 (Very Introverted)",
                            "2",
                            "3",
                            "4",
                            "5 (Very Extroverted)"
                        ]
                    },
                    {
                        type: "option",
                        label: "What is your primary focus?",
                        options: [
                            "1 (Academically Focused)",
                            "2",
                            "3",
                            "4",
                            "5 (Socially Focused)"
                        ]
                    }
                ]} />
                <button className="btn btn-primary btn-block">Save Preferences</button>
            </Section>
        </div>
    );
  }
}

/*<form>
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">How much does noise bother you while studying?</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>1 (Not at all)</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5 (I like it quiet)</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlSelect1">How tidy of a person are you?</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>1 (Very Messy)</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5 (Very Tidy)</option>
                        </select>
                    </div>
                    
                    <button className="btn btn-primary">Save</button>
                </form> */

export default ProfileView;
