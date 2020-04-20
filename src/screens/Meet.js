import React, { useEffect } from 'react'
import JitsiMeet, { JitsiMeetView } from 'react-native-jitsi-meet'

function Meet({navigation}) {

  useEffect(() => {
    setTimeout(() => {
      const url = 'https://vcall.sunube.net/123'
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
    navigation.goBack()
  }

  function onConferenceJoined(nativeEvent) {}

  function onConferenceWillJoin(nativeEvent) {}


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