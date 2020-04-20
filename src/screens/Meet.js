import React, { useEffect } from 'react'
import JitsiMeet, { JitsiMeetView } from 'react-native-jitsi-meet'

function Meet({navigation}) {

  useEffect(() => {
    setTimeout(() => {
      const url = 'https://meet.jit.si/exemple122323kj'
      const userInfo = {
        displayName: 'User',
        email: 'user@example.com',
        avatar: 'https:/gravatar.com/avatar/abc123',
      };
      JitsiMeet.call(url, userInfo)
      /* JitsiMeet.audioCall for only audio call */
    }, 1000)
  }, [])

  useEffect(() => {
    return () => JitsiMeet.endCall()
  })

  function onConferenceTerminated(nativeEvent) {
    console.log('@@@dkhgkshgfkjdg')
    navigation.goBack()
  }

  function onConferenceJoined(nativeEvent) {
    /* Conference joined event */
    console.log('@@',nativeEvent)
  }

  function onConferenceWillJoin(nativeEvent) {
    /* Conference will join event */
    console.log(nativeEvent)
  }
  return (
    <JitsiMeetView
      onConferenceTerminated={e => onConferenceTerminated(e)}
      onConferenceJoined={e => onConferenceJoined(e)}
      onConferenceWillJoin={e => onConferenceWillJoin(e)}
      style={{
        flex: 1,
        height: '100%',
        width: '100%',
      }}
    />
  )
}
export default Meet