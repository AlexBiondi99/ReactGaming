import { ProfilePage } from "./ProfilePage"

export function ProfileDataMok () {
    const personalData = {
        name:'ExampleFirstname',
        lastname:'ExampleLastname',
        email: 'localhost@yahoo.com',
        img:'https://cdn.icon-icons.com/icons2/2522/PNG/512/profile_basic_head_icon_151671.png'
    }
    return (
        <>
            <ProfilePage personalData={personalData}/> 
        </>
    )
}