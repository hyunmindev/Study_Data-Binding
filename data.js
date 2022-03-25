class Data {
  constructor(값) {
    this.값 = 값;
    this.구독자들 = [];
  }

  구독(새로운_구독자) {
    this.구독자들.push(새로운_구독자);
  }

  알림_발송() {
    this.구독자들.forEach(구독자 => 구독자.업데이트(this.값));
  }

  업데이트(새로운_값) {
    this.값 = 새로운_값;
    this.알림_발송();
  }
}

class View {
  constructor(뷰) {
    this.뷰 = 뷰;
  }

  구독(새로운_구독자) {
    this.뷰.addEventListener('input', () => {
      새로운_구독자.업데이트(this.뷰.value);
    });
  }

  업데이트(새로운_값) {
    this.뷰.innerText = 새로운_값;
    this.뷰.value = 새로운_값;
  }
}
