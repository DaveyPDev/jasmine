describe('Servers test (with setup and tear-down)', function () {
	beforeEach(function () {
		// initialization logic
		serverNameInput.value = 'Alice';
	});

	it('should add a new server to allServers on submitServerInfo()', function () {
		submitServerInfo();

		expect(Object.keys(allServers).length).toEqual(1);
		expect(allServers['server' + serverId].serverName).toEqual('Alice');
	});

	it(' should NOT add new server to table on updateServerTable()', function () {
		serverNameInput.value = '';
		submitServerInfo();

		expect(Object.keys(allServers).length).toEqual(0);
	});

	// it(' should update server list to  updateServerTable()', function () {
	// 	updateServerTable();
	// 	serverTbody.value = '';

	// 	//! not really sure what to test? Will come back to //
	// 	//? test: curserver, newtr, tipaverage? //
	// 	expect(serverTbody.length).toEqual(1);
	// });

	afterEach(function () {
		allServers = {};
		serverId = 0;
		serverTbody.innerHTML = '';
	});
});
