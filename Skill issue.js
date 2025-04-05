// Skill Issue Engine v.rage.69 - Single File Version
// This is a condensed, single-file version of the engine

use std::collections::HashMap;
use std::thread;
use std::time::{Duration, Instant};

fn main() {
    println!("Welcome to Skill Issue Engine v.rage.69!");
    println!("Booting up... [insert steaming dirty computer exploding]");

    let mut settings = EngineSettings::new();
    settings.load_presets();

    // Example logic to demonstrate core functionality
    let mut player = Player::new();
    player.enter_botplay();
    player.miss_note();
    player.hit_note(0.00001);

    trigger_flash_event();
    trigger_meme_video("bad");
}

struct EngineSettings {
    presets: HashMap<String, String>,
}

impl EngineSettings {
    fn new() -> Self {
        Self { presets: HashMap::new() }
    }

    fn load_presets(&mut self) {
        self.presets.insert("rendering_mode".to_string(), "image".to_string());
        self.presets.insert("bpm_limit".to_string(), "100000000".to_string());
        self.presets.insert("support_engines".to_string(), "JS, OS, Kade, Denpa".to_string());
        self.presets.insert("mode".to_string(), "rage.69".to_string());
    }
}

struct Player {
    in_botplay: bool,
    roasts_used: usize,
}

impl Player {
    fn new() -> Self {
        Self { in_botplay: false, roasts_used: 0 }
    }

    fn enter_botplay(&mut self) {
        self.in_botplay = true;
        println!("[Botplay Activated] beep bop boop");
        self.trigger_roast("yo u know im made for showing off skill in fucking jard songs bro.");
    }

    fn miss_note(&mut self) {
        if self.in_botplay {
            println!("[Roast] 404 skill not found.");
            self.roasts_used += 1;
            if self.roasts_used >= 6 {
                println!("[Roast Limit Reached] why u hate bf so much?");
            }
        } else {
            println!("[Missed Note] Fart sound plays");
        }
    }

    fn hit_note(&self, accuracy: f64) {
        if accuracy <= 0.00001 {
            println!("PERFECT!!!!!!!!!!!!!");
        } else {
            println!("Good hit with accuracy: {:.5}ms", accuracy);
        }
    }

    fn trigger_roast(&self, message: &str) {
        println!("[Roast] {}", message);
    }
}

fn trigger_flash_event() {
    println!("[Flash] Screen flashes white then fades");
}

fn trigger_meme_video(rating: &str) {
    if rating == "bad" {
        println!("[Meme Video] Plays because you got a bad rating!");
    }
}
