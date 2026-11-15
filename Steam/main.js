Game.registerMod('kingnullboy qolmod', {
    init: function() {
        // Spacebar Listener (Hold Space to click big cookie)
        document.addEventListener('keydown', function(event) {
            if (event.code !== 'Space') return;
            if (event.target.matches('input, textarea, select')) return;

            event.preventDefault();
            Game.ClickCookie();
        });

        // Prevent the right-click context menu from popping up
        document.addEventListener('contextmenu', function(event) {
            event.preventDefault();
        }, false);

        // Grant Third-party Shadow Achievements
        Game.Win('Third-party');
        Game.Win('Cheated cookies taste awful');

        console.log('[QoLMod] Loaded successfully!');
    },

    save: function() {
        return '';
    },

    load: function() {}
});
