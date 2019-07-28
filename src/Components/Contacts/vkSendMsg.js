import jQuery from 'jquery';

function VkSend(fullMsg) {
		const vkMask = 'https://api.vk.com/method/METHOD_NAME?PARAMETERS&access_token=ACCESS_TOKEN&v=V';
	   	const vkUrl = 'https://api.vk.com/method/';
	   	const vkMethod = 'messages.send';
	   	const vkMyUserId = '?user_id=522653134';
	   	const vkMaxUserId = '?user_id=252568607'; 
	   	const vkRandomId = `&random_id=${Date.now()}`;
	   	const vkMessage = `&message=${fullMsg}`;
	   	const vkVersion = '&v=5.52';
	   	const vkPeer = '&peer_i=493063066';
		// access_token=c170f2a143e547b2559e67646cdb4f685d57fc1561d2f0afd891bb01ab353f6941bce22f6284a4b1c4024&expires_in=0&user_id=493063066
		const vkAccessToken = '&access_token=29413427d44733ac6d00185f76f6cfa45d3971d3fe56cae5b37b91b4173f1a324b97ca34fc714a2a3c0ee';
		const vkMyRequest = `${vkUrl}${vkMethod}${vkMyUserId}${vkRandomId}${vkPeer}${vkMessage}${vkVersion}${vkAccessToken}`;
		const vkMaxRequest = `${vkUrl}${vkMethod}${vkMaxUserId}${vkRandomId}${vkPeer}${vkMessage}${vkVersion}${vkAccessToken}`;
		const myFetch = {url: vkMyRequest, method: 'GET', dataType: 'JSONP', success: (res)=>console.log(res) };
		const maxFetch = {url: vkMaxRequest, method: 'GET', dataType: 'JSONP', success: (res)=>console.log(res) };

   		jQuery.ajax( myFetch ).then(res=>console.log(res));
   		// jQuery.ajax( maxFetch ).then(res=>console.log(res));
}

export default VkSend;