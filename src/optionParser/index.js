export default function parseOptions() {
  try {
    const hash = window.location.hash.substr(1);
    const decoded = window.atob(hash);
    const options = JSON.parse(decoded);
    return typeof options === 'object' ? options : {};
  } catch (e) {
    // options are not properly encoded
    return {};
  }
}
