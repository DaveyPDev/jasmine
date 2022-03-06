describe(' start payment tests ', () => {
	beforeEach(() => {
		billAmtInput.value = '';
		tipAmtInput.value = '';
		paymentForm.value = '';
		paymentTbody.value = '';
		summaryTds.value = '';
		allPayments = {};
		paymentId = 0;
	});

	describe(' test submitPaymentInfo()', () => {
		it(' submitPaymentInfo', function () {
			submitPaymentInfo();
			const values = {
				billAmtInput: 100,
				tipAmtInput: 20,
				tipPerentInput: 20
			}
			expect(submitPaymentInfo(100)).toEqual(20);
			expect(submitPaymentInfo(billAmtInput.value)).toEqual(tipAmtInput.value);
			expect(submitPaymentInfo(billAmtInput.value)).toBe(tipAmtInput.value);
			expect(submitPaymentInfo(billAmtInput.value).length).toBe(tipAmtInput.value);
		});
	});

	describe(' test currentPayments() ', () => {
		it(' create Current Payments', () => {
			expect(createCurPayment(100)).toEqual(20);
		});
	});

	describe(' test appendPaymentTable()', () => {
		it(' append Payment Table', () => {
			expect(appendPaymentTable()).toEqual();
		});
	});

	afterEach(() => {
		billAmtInput.value = '';
		tipAmtInput.value = '';
		paymentForm.value = '';
		paymentTbody.value = '';
		summaryTds.value = '';
		allPayments = {};
		paymentId = 0;
	});
});
