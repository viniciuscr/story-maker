use std::fs;

#[tauri::command]
fn fetch_scene(scene: &str) -> String {
    let scene_json: String =
        fs::read_to_string(format!("./data/{scene}.json")).expect("failed to open scene");
    scene_json
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![fetch_scene])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
