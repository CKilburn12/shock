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
                <Form model={[
                    {
                        type: "text",
                        label: "Name"
                    },
                    {
                        type: "text-readonly",
                        label: "Username",
                        value: "misaig"
                    },
                    {
                        type: "text-area",
                        label: "Bio"
                    }
                ]}/>
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
                        label: "What is your preferred study environment?",
                        options: [
                            "1 (Silence)",
                            "2",
                            "3",
                            "4",
                            "5 (Loud)"
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
                    },
                    {
                        type: "option",
                        label: "What time do you typically wake up?",
                        options: [
                            "< 5 am",
                            "6 am",
                            "7 am",
                            "8 am",
                            "> 9 am"
                        ]
                    },

                    {
                        type: "option",
                        label: "What time do you typically go to sleep?",
                        options: [
                            "8 pm",
                            "9 pm",
                            "10 pm",
                            "11 pm",
                            "12 pm",
                            "> 1 am"
                        ]
                    },
                    {
                        type: "option",
                        label: "Favorite type of music?",
                        options: [
                            "Hip-hop",
                            "Classic Rock",
                            "Pop",
                            "Alternative",
                            "Metal",
                            "Classical"
                        ]
                    }
                ]} />
                <button className="btn btn-primary btn-block">Save Preferences</button>
            </Section>
        </div>
    );
  }
}

export default ProfileView;
