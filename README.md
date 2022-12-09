# codearts-example-registerMenu README

Example of how to register or unregister menu by using vscode.window.registerMenu and vscode.window.unregisterMenu.

## Contribution Points

| MenuId | Desc |
| --- | --- |
| `CommandPalette` | The global Command Palette |
| `DebugBreakpointsContext` | The debug breakpoints view context menu |
| `DebugCallStackContext` | The debug callstack view context menu |
| `DebugConsoleContext` | The debug console view context menu |
| `DebugVariablesContext` | The debug variables view context menu |
| `DebugWatchContext` | The debug watch view context menu |
| `DebugToolBar` | The debug toolbar menu |
| `DebugToolBarStop` | Stop inside the debug toolbar menu |
| `EditorContext` | The editor context menu |
| `SimpleEditorContext` | --- |
| `EditorContextCopy` | 'Copy as' submenu in the editor context menu |
| `EditorContextPeek` | 'Peek' submenu in the editor context menu |
| `EditorContextShare` | 'Share' submenu in the editor context menu |
| `EditorTitle` | The editor title menu bar |
| `EditorTitleRun` | Run submenu inside the editor title menu |
| `EditorTitleContext` | The editor tabs context menu |
| `EmptyEditorGroup` | --- |
| `EmptyEditorGroupContext` | --- |
| `ExplorerContext` | The Explorer context menu |
| `ExtensionContext` | The extension context menu |
| `GlobalActivity` | --- |
| `CommandCenter` | --- |
| `MenubarMainMenu` | The left part of title. |
| `MenubarAppearanceMenu` | Appearance submenu shown in the top level View menu. |
| `MenubarDebugMenu` | The top level Debug menu |
| `MenubarEditMenu` | The top level Edit menu |
| `MenubarCopy` | 'Copy as' submenu in the top level Edit menu |
| `MenubarFileMenu` | the top level File menu. |
| `MenubarGoMenu` | The top level Go menu |
| `MenubarHelpMenu` | The top level Help menu |
| `MenubarLayoutMenu` | --- |
| `MenubarNewBreakpointMenu` | --- |
| `MenubarPanelAlignmentMenu` | --- |
| `MenubarPanelPositionMenu` | --- |
| `MenubarPreferencesMenu` | The top level Preferences menu |
| `MenubarRecentMenu` | Recent submenu shown in the top level File menu. |
| `MenubarSelectionMenu` | The top level Selection menu |
| `MenubarShare` | Share submenu shown in the top level File menu. |
| `MenubarSwitchEditorMenu` | --- |
| `MenubarSwitchGroupMenu` | --- |
| `MenubarTerminalMenu` | The top level Terminal menu |
| `MenubarViewMenu` | The top level View menu |
| `MenubarHomeMenu` | The home indicator context menu (web only) |
| `OpenEditorsContext` | --- |
| `ProblemsPanelContext` | --- |
| `SCMChangeContext` | The Source Control inline change menu |
| `SCMResourceContext` | The Source Control resource state context menu |
| `SCMResourceFolderContext` | The Source Control resource folder context menu |
| `SCMResourceGroupContext` | The Source Control resource group context menu |
| `SCMSourceControl` | The Source Control menu |
| `SCMTitle` | The Source Control title menu |
| `SearchContext` | --- |
| `StatusBarWindowIndicatorMenu` | --- |
| `StatusBarRemoteIndicatorMenu` | The remote indicator menu in the status bar |
| `TestItem` | The contributed test item menu |
| `TestItemGutter` | The menu for a gutter decoration for a test item |
| `TestPeekElement` | --- |
| `TestPeekTitle` | --- |
| `TitleBarContext` | --- |
| `TunnelContext` | The Ports view item context menu |
| `TunnelPrivacy` | --- |
| `TunnelProtocol` | --- |
| `TunnelInline` | --- |
| `TunnelTitle` | --- |
| `TunnelLocalAddressInline` | --- |
| `TunnelOriginInline` | The Ports view item origin inline menu |
| `ViewItemContext` | The contributed view item context menu |
| `ViewContainerTitle` | --- |
| `ViewContainerTitleContext` | --- |
| `ViewTitle` | The contributed view title menu |
| `ViewTitleContext` | --- |
| `CommentThreadTitle` | The contributed comment thread title menu |
| `CommentThreadActions` | The contributed comment thread context menu, rendered as buttons below the comment editor |
| `CommentTitle` | The contributed comment title menu |
| `CommentActions` | The contributed comment context menu, rendered as buttons below the comment editor |
| `InteractiveToolbar` | The contributed interactive toolbar menu |
| `InteractiveCellTitle` | The contributed interactive cell title menu |
| `InteractiveCellExecute` | --- |
| `InteractiveInputExecute` | --- |
| `NotebookToolbar` | The contributed notebook toolbar menu |
| `NotebookCellTitle` | The contributed notebook cell title menu |
| `NotebookCellInsert` | --- |
| `NotebookCellBetween` | --- |
| `NotebookCellTop` | --- |
| `NotebookCellExecute` | The contributed notebook cell execution menu |
| `NotebookCellExecutePrimary` | The contributed primary notebook cell execution button |
| `NotebookDiffCellInputTitle` | --- |
| `NotebookDiffCellMetadataTitle` | --- |
| `NotebookDiffCellOutputsTitle` | --- |
| `NotebookOutputToolbar` | --- |
| `NotebookEditorLayoutConfigure` | --- |
| `NotebookKernelSource` | The contributed notebook kernel sources menu |
| `BulkEditTitle` | --- |
| `BulkEditContext` | --- |
| `TimelineItemContext` | The Timeline view item context menu |
| `TimelineTitle` | The Timeline view title menu |
| `TimelineTitleContext` | --- |
| `TimelineFilterSubMenu` | --- |
| `AccountsContext` | --- |
| `PanelTitle` | --- |
| `AuxiliaryBarTitle` | --- |
| `TerminalInstanceContext` | --- |
| `TerminalEditorInstanceContext` | --- |
| `TerminalNewDropdownContext` | --- |
| `TerminalTabContext` | --- |
| `TerminalTabEmptyAreaContext` | --- |
| `TerminalInlineTabContext` | --- |
| `WebviewContext` | --- |
| `InlineCompletionsActions` | The actions shown when hovering on an inline completion |
| `NewFile` | The 'New File...' quick pick, shown on welcome page and File menu. |
| `MergeToolbar` | The prominent botton in the merge editor |
| `CustomRightSideMenubar` | The right part of title. |


## Sorting of groups
Menu items can be sorted into groups. They are sorted in lexicographical order with the following defaults/rules. You can add menu items to these groups or add new groups of menu items in between, below, or above.

| group id | Desc |
| --- | --- |
| `navigation` | --- |
| `0_workbench_layout` | --- |
| `1_do` | --- |
| `1_basic` | --- |
| `2_ccp` | --- |
| `1_modification` | --- |
| `3_find` | --- |
| `6_problem_nav` | --- |
| `peek` | --- |
| `4_symbol_nav` | --- |
| `2_line` | --- |
| `3_multi` | --- |
| `left` | --- |
| `right` | --- |
| `2_reference` | --- |
| `3_feedback` | --- |
| `4_legal` | --- |
| `y_more` | --- |
| `1_toggle_view` | --- |
| `z_about` | --- |
| `1_new` | --- |
| `z_ConfirmClose` | --- |
| `2_open` | --- |
| `3_workbench_layout_move` | --- |
| `1_hide` | --- |