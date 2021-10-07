class Header extends HTMLElement{
    constructor(){
        super()
    }
connectedCallback(){
    this.innerHTML = `
    <!-- Start of Nav -->
    <div class="nav-opener">
        <div class="nav-icon-line-1"></div>
        <div class="nav-icon-line-2"></div>
        <div class="nav-icon-line-3"></div>
    </div>
    <nav>
      <a class="nav-scrimba" href="https://scrimba.com/" rel="noopener" target="_blank"><img class="nav-logo" src="../../../imgs/scrimba-black.svg" alt="scrimba-logo"></a>
      <div class="nav-other-links">
        <a target="_blank" rel="noopener" href="https://scrimba.com/learn/weeklychallenge/the-weekly-web-dev-challenge-word-count-latest-challenge-code-to-win-cE62LvsB">Current Challenge</a>  
        <a href="https://weeklywebdevchallenge.scrimba.com/hall-of-fame" rel="noopener" target="_blank">Hall of Fame</a>
        <a href="#prev_challenges">Previous Challenges</a>
      </div>
    </nav>
    
    `
}

}

customElements.define('header-component', Header)