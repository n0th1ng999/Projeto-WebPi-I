import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { ref, computed, reactive } from "vue";

export const useThemeStore = defineStore("Theme", () => {
	const Themes = ref(
		useLocalStorage("Themes", [
			{
				id: 1,
				name: "Agricultura Sustentável",
			},
			{
				id: 2,
				name: "Animais",
			},
		])
	);

	/**
	 * @param {String} name name of new theme
	 */
	function CreateTheme(name) {
		Themes.value.push({
			id: Themes.value[Themes.value.length - 1].id++,
			name: name,
		});
	}

	/**
	 * @param {Object} ThemeObj id and theme name
	 */
	function ChangeTheme(ThemeObj) {
		let themeIndex = Themes.value.findIndex((theme) => theme.id == ThemeObj.id);
		Themes.value[themeIndex] = ThemeObj;
	}

	/**
	 * @param {Number} idTheme Theme Id
	 */
	function DeleteTheme(idTheme) {
		Themes.value = Themes.value.filter((theme) => theme.id != idTheme);
	}

	/**
	 * @type {Object} GetThemes returns all the themes
	 */
	const GetThemes = computed(() => {
		return Themes.value;
	});

	/** 
    @type {Object} Theme
  */
	const Theme = ref();

	/**
	 * @type {Function} GetTheme Getter For Specific Theme
	 */
	const GetTheme = computed({
		// getter
		get() {
			return Theme.value;
		},
		// setter
		set(ID) {
			Theme.value = Themes.value.find((theme) => theme.id == ID);
		},
	});

	/**
	 * Sets Parameter for GetTheme
	 * @param {number} id Identifier for GetTheme
	 */
	function SetTheme(id) {
		GetTheme.value = id;
	}

	return {
		GetThemes,
		GetTheme,
		SetTheme,
		CreateTheme,
		ChangeTheme,
		DeleteTheme,
	};
});
